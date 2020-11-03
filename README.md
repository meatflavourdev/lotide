# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @meatflavourdev/lotide`

**Require it:**

`const _ = require('@meatflavourdev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
---
## `const head = function(arr)`

Returns the first object in the specified array

 * **Parameters:** `arr` — `*[]` — An array of unspecified type and length
 * **Returns:** `*` — First item in the specified array
---
## `const middle = function(arr)`

Returns an array containing the middle element(s) of a given array

 * **Parameters:** `arr` — `*[]` — The input array
 * **Returns:** `*[]` — An array containing the middle element(s) if they exist
---
## `const tail = function(arr)`

Returns a shallow copy of the given array without the first element When passed a one-dimensional array, the tail is copied and returned. WARNING: Multi-dimensional elements will not be copied and will only be returned by referenced

 * **Parameters:** `arr` — `*[]` — An array of unspecified type
 * **Returns:** `*[]` — The tail of the array, that is, an array with every element but the first