import type {
  RecordBatch,
  Schema,
  AsyncRecordBatchStreamReader,
  StructRowProxy,
  TypeMap,
} from 'apache-arrow';

/**
 * Transform RecordBatch array to object array
 * @param batches The result of `DatabaseQueryProvider#queryAll`
 */
export function batchesToObjects<RowType = any>(batches: RecordBatch<any>[]): RowType[] {
  const result: RowType[] = [];
  for (const batch of batches) for (const row of batch) result.push(row.toJSON() as any);
  return result;
}

/**
 * Transform RecordBatch array to value matrix (2D array)
 * @param batches The result of `DatabaseQueryProvider#queryAll`
 */
export function batchesToArrays(batches: RecordBatch<any>[]) {
  const result: any[][] = [];
  for (const batch of batches) for (const row of batch) result.push(row.toArray());
  return result;
}

/**
 * Represents a class for reading rows from an AsyncRecordBatchStreamReader,
 * which is the result of `DatabaseQueryProvider#query`
 */
export class ArrowAsyncRowReader<RowType extends TypeMap> {
  constructor(private readonly stream: AsyncRecordBatchStreamReader) {}

  /** Cached schema info */
  private schema?: Schema;
  /** Currently reading batch */
  private batch?: RecordBatch<any>;
  /** The number of rows in current batch */
  private batchRows?: number;
  /** The read pointer in current batch */
  private batchPtr = 0;
  /** Has this stream been read completely */
  private done = false;

  /**
   * Initializes the batch by fetching the next record batch from the stream.
   * @returns `false` represents this stream has been read completely
   */
  private readonly initBatch = async (): Promise<boolean> => {
    if (this.batch) return true;
    const it = await this.stream.next();
    if (it.done) {
      this.done = true;
      return false;
    }
    this.batch = it.value;
    this.batchPtr = 0;
    this.batchRows = this.batch.numRows;
    if (!this.schema) this.schema = this.batch.schema;
    return true;
  };

  readonly getSchema = async (): Promise<Schema> => {
    if (this.schema) return this.schema;
    await this.initBatch();
    return this.schema!;
  };

  /** Reads the next row from the `AsyncRecordBatchStreamReader` */
  readonly read = async (): Promise<StructRowProxy<RowType> | undefined> => {
    if (this.done) return;
    await this.initBatch();
    if (this.done || !this.batch) return;
    const row = this.batch.get(this.batchPtr++);
    if (this.batchPtr > this.batchRows!) {
      delete this.batch;
      return;
    }
    return row as any;
  };

  /**
   * It is used for `for await (const row of reader) { ... }`
   */
  [Symbol.asyncIterator]() {
    const readFn: typeof this.read = this.read.bind(this);
    return {
      async next() {
        const value = await readFn();
        if (value) return { value, done: false };
        return { done: true };
      },
    };
  }
}
