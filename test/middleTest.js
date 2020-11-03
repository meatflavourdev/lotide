const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("Returns false when passed undefined/NaN/null", () => {
    assert.strictEqual(middle(undefined), false);
    assert.strictEqual(middle(NaN), false);
    assert.strictEqual(middle(null), false);
  });

  it("Returns undefined elements correctly", () => {
    assert.deepEqual(middle([undefined, undefined, undefined]), [undefined]);
  });
  
  it("Returns undefined elements correctly", () => {
    assert.deepEqual(middle([undefined, undefined, undefined, undefined]), [undefined, undefined]);
  });

  it("Returns null elements correctly", () => {
    assert.deepEqual(middle([null, null, null]), [null]);
  });
  
  it("Returns null elements correctly", () => {
    assert.deepEqual(middle([null, null, null, null]), [null, null]);
  });

  it("Returns empty array when passed empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("Empty array when passed one number", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("Empty array when passed one string", () => {
    assert.deepEqual(middle(["a"]), []);
  });

  it("Empty array when passed two element", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("Return middle number when passed odd numberd arrays", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Return middle number when passed odd numberd arrays", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("Return two middle numbers when passed even numberd arrays", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("Return two middle number when passed even numberd arrays", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("Return two middle strings when passed even numberd arrays", () => {
    assert.deepEqual(middle(["a", "b", "c"]), ["b"]);
  });

  it("Return two middle strings when passed even numberd arrays", () => {
    assert.deepEqual(middle(["a", "b", "c", "d"]), ["b", "c"]);
  });

});