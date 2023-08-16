"use strict";

const { BadRequestError } = require("../expressError");
const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {

  /**
   * TESTS:
   * Works: Valid update object, key mapping
   * Fails: Empty update object (BadRequestError)
   * Fails: Argument missing (TypeError)
   */

  test("Works: Valid update object, key mapping", function () {
    const dataToUpdate = {firstName: 'Aliya', age: 32};
    const jsToSql = { firstName: 'first_name' };
    const result = sqlForPartialUpdate(dataToUpdate, jsToSql);
    expect(result).toEqual({
      setCols: `"first_name"=$1, "age"=$2`,
      values: ['Aliya', 32]
    });
  });

  test("Fails: Empty update object (BadRequestError)", function () {
    const dataToUpdate = {};
    const jsToSql = {};
    expect(() => {
      sqlForPartialUpdate(dataToUpdate, jsToSql)
    }).toThrow(BadRequestError);
  });

  test("Fails: Argument missing (TypeError)", function () {
    const dataToUpdate = {firstName: 'Aliya', age: 32};
    //const jsToSql = {};
    expect(() => {
      sqlForPartialUpdate(dataToUpdate)
    }).toThrow(TypeError);
  });

});