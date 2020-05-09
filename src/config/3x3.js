const _ = require('underscore')

var original = _.shuffle([
    1, 2, 3, 
    4, 5, 6, 
    7, 8
])

var array1 = original.slice(0, 3)
var array2 = original.slice(3, 6)
var array3 = original.slice(6, 8)

var insert = (arr, index, newValue) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newValue,
  // part of the array after the specified index
  ...arr.slice(index)
]
// array, index, value
var array3new = insert(array3, 2, 0)

exports.array = [
        array1,
        array2,
        array3new
]