/*!
 *  FizzBuzz Solution for Node.js
 *  Author: Kevin Coughlin @kevintcoughlin
 *  MIT Licensed
 */

"use strict";

var args = process.argv.splice(2),
    n = (args[0] === undefined) ? 100 : parseInt(args[0], 10);

// FizzBuzz Logic
for (var i = 1; i <= n; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}