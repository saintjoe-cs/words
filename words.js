// github example homework for problem 2.2 CMP344
// Brian Capouch written 17 January 2015
// 

// Establish and array, and functions to print it forwards and backwards
//

// Primary data stucture
var words = ["My","dog","has","enormous","fleas"];

// Make d8 look like node
//   Comment this out to use this code with node
var print = function(args) {
  console.log(args);
  }

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
