if (typeof(process) == "object") {
  var print = function(args) {
	console.log(args);
	}
  var write = function(args) {
	process.stdout.write(args);
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

var words = ["My","dog","has","enormous","fleas"];

var forwords = function(arr) {
  write('Words done forwards:\n');
  for ( var i = 0; i < arr.length; ++i ) 
	print(arr[i]);
  }

var backwords = function(arr) {
  process.stdout.write('\nWords done backwards:\n');
  for ( var i = ( arr.length -1 ); i >= 0; i-- )
	console.log(arr[i]);
  }

forwords(words);
backwords(words);
