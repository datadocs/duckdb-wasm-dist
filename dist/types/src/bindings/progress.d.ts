/** An instantiation progress */
export interface InstantiationProgress {
    startedAt: Date;
    updatedAt: Date;
    bytesTotal: number;
    bytesLoaded: number;
}
/** An instantiation progress handler */
export declare type InstantiationProgressHandler = (p: InstantiationProgress) => void;
