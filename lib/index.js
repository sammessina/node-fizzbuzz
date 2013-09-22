"use strict";

/*!
 *  FizzBuzz Solution for Node.js
 *  Author: Kevin Coughlin @kevintcoughlin
 *  MIT Licensed
 */

var args = process.argv.splice(2)
  , n;

// Default to 100
if (args[0] === undefined ? n = 100 : n = parseInt(args[0]));

// FizzBuzz Logic
for (var i = 1; i <= n; i++) {
	if ((i % 3 == 0) && (i % 5 == 0)) {
		console.log("FizzBuzz")
	} else if (i % 3 == 0) {
		console.log("Fizz")
	} else if (i % 5 == 0) {
		console.log("Buzz")
	} else {
		console.log(i)
	}
}