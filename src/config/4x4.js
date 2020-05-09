const _ = require('underscore')

var original = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
var array1 = original.slice(0, 4)
var array2 = original.slice(4, 8)
var array3 = original.slice(8, 12)
var array4 = original.slice(12, 15)

var insert = (arr, index, newValue) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newValue,
  // part of the array after the specified index
  ...arr.slice(index)
]
// array, index, value
var array4new = insert(array4, 4, 0)

exports.array = [
        array1,
        array2,
        array3,
        array4new
]