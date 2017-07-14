const _ = require('underscore');
var arr = [3, 6, 9, 1, 12];

let first = _.first(arr);
console.log(_.first(arr), typeof(first));

let first_3 = _.first(arr, 3);
console.log(first_3, typeof(first_3), first_3[1]);

let last = _.last(arr);
console.log(last, typeof(last));

let last_2 = _.last(arr, 2);
console.log(last_2, typeof(last_2));