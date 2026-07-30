import { DuckDBConnection } from "@datadocs/duckdb-wasm/dist/types/src/bindings/connection.js";
import { batchesToObjects } from "./query-result-utils.js";

export const temporaryTableNames = ["test", "test2"];

// Table test
const create_table_query_str = `CREATE TABLE  test
(
  id integer PRIMARY KEY,
  date DATE,
  instance_id integer,
  territory_id varchar,
  code varchar,
  price decimal,
  currency_code_id varchar,
  price_in_usd decimal,
  variant_val variant,
  test_icons integer,
  location ROW(
    address ROW(
      street VARCHAR,
      city VARCHAR,
      state VARCHAR,
      zip INT
    ),
    location GEOGRAPHY
  ),
  metadata json,
  bool_ bool,
  bool_arr bool[],
  int_arr integer[],
  str_arr string[],
  struct_arr ROW(val1 integer, val2 varchar)[],
  variant_arr variant[],
  Link VARCHAR,
  Label VARCHAR,
  Link_in_text VARCHAR,
);`;
const create_table2_query_str = `CREATE TABLE  test2
(
  id integer PRIMARY KEY,
  code varchar
);`;

const insert_table_query_str = `INSERT INTO test VALUES
(1, '2018-02-27', 315965, 'CA', 'SDBUY', 9.99, 'CAD', 7.88, variant(1), -3, (('456 Main St', 'Toronto', 'ON', 20002), ST_MAKEPOINT(-79.3913, 43.6426)), '{ "shipment_count": 9587, "owner": { "name": "John", "lastname": "Doe" } }', false, [false, false, false], [1, 2, 3, 4, 5], ['Lorem', 'Ipsum', 'Dolor', 'Sit'], [(1, 'test'), (2, 'lorem ipsum')], [variant(123), variant({ hello: 'world'})], 'https://google.com', 'Google', 'This is a link to Google'),
(2, '2018-02-28', 315965, 'US', 'SDBUY', 14.99, 'USD', 14.99, variant(DATE '2018-02-27'), 1, (('123 Main St', 'New York', 'NY', 10001), ST_MAKEPOINT(-73.987128, 40.748817)), '["Lorem", "Impsum", 42]', true, [true, false, false], [1, 3, 5], ['Lorem'], [(3, 'dolor'), (4, 'sit')], [variant('test'), variant(false), variant(1.2::DECIMAL)], 'https://mozilla.org', 'Mozilla', 'This is a link to Mozilla'),
(3, '2018-02-26', 315965, 'US', 'SDRENT', 3.99, 'USD', 3.99, variant('SDBUY'), -5, (('456 Elm St', 'Los Angeles', 'CA', 90012), ST_MAKEPOINT(-118.241334, 34.054002)), '{ "shipment_count": 579, "owner": { "name": "William ", "lastname": "Carter" } }', false, [true, true, false, null], [2, 4], ['Ipsum'], [(5, 'lorem'), (6, 'amet')], [variant(ST_MAKEPOINT(1, 2)), variant(true)], 'youtube.com', 'Youtube', 'This is a link to Youtube'),
(4, '2018-05-07', 315965, 'NZ', 'SDBUY', 12.99, 'NZD', 9.47, variant('https://youtube.com'), 0, (('10 Pine St', 'Wellington', 'North Island', 6011), ST_MAKEPOINT(174.7749, -41.2969)), '{ "shipment_count": 2432, "notes": ["Returned", "Refunded"] }', true, [true, true, true], [6, 7, 8, 9, 5], ['Lorem', 'Ipsum'], [(7, 'ipsum'), (8, 'dolor')], [variant(1.2::DECIMAL), variant('test')], 'https://abc.xyz', 'Alphabet', 'This is a link to Alphabet'),
(5, '2018-05-08', 315965, 'NZ', 'SDRENT', 5.99, 'NZD', 4.37, variant(2.34::DECIMAL), 2, (('789 Oak St', 'Auckland', 'North Island', 1010), ST_MAKEPOINT(174.7762, -36.8485)), '{ "shipment_count": 5463 }', false, [false, true, true, null], [6, 8, 5], ['Dolor'], [(9, 'sit'), (1, 'dolor')], [variant(false)], 'https://amazon.com', 'Amazon', 'This is a link'),
(6, '2019-09-27', 315965, 'AU', 'SDBUY', 14.99, 'AUD', 11.77, variant(315965), 0, (('234 Maple St', 'Sydney', 'NSW', 2000), ST_MAKEPOINT(151.2093, -33.8688)), '{ "shipment_count": 435 }', true, [false, false, true], [7, 9], ['Sit'], [(2, 'consectetur'), (3, 'sit')], [variant([1, 2]), variant([false, true])], 'https://google.com', 'Google', 'This is a link'),
(7, '2020-12-27', 315965, 'AU', 'SDRENT', 4.99, 'AUD', 3.92, variant(4.99), -2, (('567 Birch St', 'Melbourne', 'VIC', 3000), ST_MAKEPOINT(144.9631, -37.8136)), '{ "shipment_count": 6546 }', false, [false, false, false], [1, 5, 9], ['Dolor', 'Sit'], [(4, 'adipiscing'), (5, 'amet')], [variant('{ "hello": "world"}'::JSON), variant(1)], 'https://abc.xyz', 'Alphabet', 'This is a link'),
(8, '2020-07-28', 315965, 'GB', 'SDBUY', 7.99, 'GBP', 11.17, variant([1, 2, 3]), 6, (('890 Cedar St', 'London', 'England', 4000), ST_MAKEPOINT(-0.142210, 51.518071)), '{ "shipment_count": 4543 }', true, [false], [2, 6, 8], ['Lorem', 'Lorem'], [(6, 'elit'), (7, 'lorem')], [variant({ hello: 'world'}), variant(INTERVAL 1 YEAR)], 'youtube.com', 'Youtube', 'This is a link'),
(9, '2021-09-27', 315965, 'GB', 'SDRENT', 3.49, 'GBP', 4.88, variant(INTERVAL 1 YEAR), 7, (('111 Oak St', 'Birmingham', 'England', 5000), ST_MAKEPOINT(-1.903554, 52.479220)), '{ "shipment_count": 4534 }', false, [true], [3, 7, 10], ['Ipsum', 'Ipsum'], [(8, 'sed'), (9, 'dolor')], [variant('2023-04-23'::DATE)], 'https://abc.xyz', 'Alphabet', 'This is a link'),
(10, '2022-10-27', 315965, 'IE', 'SDBUY', 8.99, 'EUR', 11.09, variant({'x': 1, 'y': 2, 'z': 3}), 0, (('222 Elm St', 'Dublin', 'Ireland', 6000), ST_MAKEPOINT(-6.260310, 53.347138)), '{ "shipment_count": 345 }', true, [], [], [], [(1, 'do'), (2, 'ipsum')], [variant('')], 'https://mozilla.org', 'Mozilla', 'This is a link'),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, NULL, NULL, '', NULL, NULL, NULL, NULL, variant(''), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, NULL, NULL, '', NULL, NULL, NULL, NULL, variant([{'x': 1, 'y': 2, 'z': 3}, {'x': 2, 'y': 3, 'z': 4}]), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, '2018-02-28', 315965, 'US', 'SDBUY', 14.99, 'USD', 14.99, variant(ST_MAKELINE(ST_MAKEPOINT(1, 2), ST_MAKEPOINT(1, 3))), 1, (('123 Main St', 'New York', 'NY', 10001), ST_MAKEPOINT(-73.987128, 40.748817)), '["Lorem", "Impsum", 42]', true, [true, false, false], [1, 3, 5], ['Lorem'], [(3, 'dolor'), (4, 'sit')], [variant('test'), variant(false), variant(1.2::DECIMAL)], 'https://mozilla.org', 'Mozilla', 'This is a link to Mozilla'),;`;

const insert_table2_query_str = `INSERT INTO test2 VALUES
(1, 'Hello'), (2, 'World')
`;

/** In-memory flag to avoid unnecessary checks */
let created = false;

/**
 * Create temporary table for demo
 */
export async function createTemporaryTables(
  conn: DuckDBConnection,
) {
  const tableNames = batchesToObjects<{ name: string }>(
    await conn.query(`show tables`)
  ).map((it) => it.name);
  console.log(tableNames);

  if (!tableNames.includes("test")) {
    await dbManager.query(create_table_query_str, connID);
    await dbManager.query(insert_table_query_str, connID);
  }
  if (!tableNames.includes("test2")) {
    await dbManager.query(create_table2_query_str, connID);
    await dbManager.query(insert_table2_query_str, connID);
  }
  console.log("Create temporary tables =================== ");
  created = true;
}

/**
 * Default Id for local duckdb database manager
 */
export let duckdbDatabaseManagerId: string | null = null;

/**
 * Set Current Duckdb Temporary Database Manager
 * @param id
 */
export function setCurrentDuckdbTemporaryDatabaseManagerId(id: string) {
  duckdbDatabaseManagerId = id;
}
