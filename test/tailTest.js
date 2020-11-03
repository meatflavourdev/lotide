const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => {
  it("Returns an array of length 2 when passed an array of length 3", () => {
    const test1 = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(test1.length, 2);
  });

  it("Returns an array containing the last two elements", () => {
    const testArray = ["Hello", "Lighthouse", "Labs"];
    const test1 = tail(testArray);
    assert.deepEqual(test1, ["Lighthouse", "Labs"]);
  });

  it("Does not modify the origial array but instead makes a shallow copy", () => {
    const test2 = ["Yo Yo", "Lighthouse", "Labs"];
    tail(test2); 
    assert.deepEqual(test2, ["Yo Yo", "Lighthouse", "Labs"]); 
  });
  
  it("Returns empty array when passed array of single element", () => {
    const test3 = ["Lonely"];
    const result3 = tail(test3);
    assert.deepEqual(result3, [],);
  });

  it("Returns empty array when passed empty array", () => {
    const test4 = [];
    const result4 = tail(test4);
    assert.deepEqual(result4, []);
  });

  it("Returns empty array when passed array of undefined element", () => {
    const test5 = [undefined];
    const result5 = tail(test5);
    assert.deepEqual(result5, []); 
  });
});