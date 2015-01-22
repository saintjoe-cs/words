// github example homework for problem 2.2 CMP344
// Brian Capouch written 17 January 2015
// 

// Establish an array, and functions to print it forwards and backwards
//

// Utility code so we can run with either interpreter
if(typeof(process) == "object") {
  var print = function(args) {
        console.log(args);
        }
  var write = function(args) {
        process.stdout.write(args);
        }
  var read = function(filename) {
	fs = require('fs')
        fs.readFile(filename,'utf8',function(err,data) {
        if (err) {
            return console.log(err);
	    }
	return data;
	});
 }
} else {
  console = new Object();
  console.log = function(args) {
    print(args);
        }
  process = new Object();
  process.stdout = new Object();
  process.stdout.write = function(args) {
    write(args);
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
