// github example homework for problem 2.2 CMP344
// Brian Capouch written 17 January 2015
// 

// Establish an array, and functions to print it forwards and backwards
//

// Utility "whoami" function
if (typeof(process) == "object") {
  // We are using node.js
  var print = function(args) {
	console.log(args);
	}
  }

// Primary data stucture
var words = ["My","dog","has","enormous","fleas"];

// Print in-order
var forwords = function(arr) {
  print('Words done forwards:');
  for ( var i = 0; i < arr.length; ++i ) 
	print(arr[i]);
  }

// Print in reverse order
var backwords = function(arr) {
  print('\nWords done backwards:');
  // Note different loop termination condition here
  for ( var i = ( arr.length -1 ); i >= 0; i-- )
	print(arr[i]);
  }

forwords(words);
backwords(words);
