const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("Returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("Returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("Returns undefined when passed and empty array", () => {
    assert.strictEqual(head([]), undefined); 
  });

  it("Returns the single number when passes a single number", () => {
    assert.strictEqual(head([1]), 1); 
  });

  it("Returns the single boolean when passes a single boolean", () => {
    assert.strictEqual(head([true]), true); 
  });

  it("Returns the first element when passes an array of numbers", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });

  it("Returns the first element when passes an array of strings", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it("Returns the first element when passes an array of booleans", () => {
    assert.strictEqual(head([true, false, true]), true); 
  });
  
  it("Returns the first element when passes an array of mixed types", () => {
    assert.strictEqual(head(["334 23", false, "sdfs", true, "fooo", 343]), "334 23"); 
  });
  
  it("Returns undefined when passed an empty object", () => {
    assert.strictEqual(head({}), undefined); 
  });

  it("Returns undefined when passed an non-empty object", () => {
    assert.strictEqual(head({3: 3, "string": "value", key: true, that: undefined, nullVal: null}), undefined); 
  });

  it("Returns undefined when passed a number", () => {
    assert.strictEqual(head(12), undefined); 
  });

  it("Returns undefined when passed an empty string", () => {
    assert.strictEqual(head(""), undefined); 
  });

  it("Returns first character when passed a string", () => {
    assert.strictEqual(head("this is a string"), "t"); 
  });
});