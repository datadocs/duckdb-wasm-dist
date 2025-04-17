export const TEST_SQLS: string[] = [
    'SELECT [];',
    'SELECT 1::VARIANT;',
    'SELECT []::VARIANT;',
    'SELECT []::INT[];',
    'SELECT [1,2,3]::INT[];',
    "SELECT [{'x':1},{'x':2}]::ROW(x INT)[];",
    'CREATE TABLE test2 ( int_arr INT[] );',
    'INSERT INTO test2 (int_arr) VALUES ([10,30,50]), ([20,40,50]), ([]), (NULL), ([40]);',
    'SELECT * FROM test2;',
    'CREATE OR REPLACE VIEW test_view2 AS (WITH cte AS (SELECT *, (ROW_NUMBER() OVER () - 1) AS rowid FROM (SELECT * from test2)) SELECT cte.* FROM cte)'
];
