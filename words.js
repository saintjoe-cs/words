var words = ["My","dog","has","enormous","fleas"];

var print = function(args) {
  console.log(args);
  }

var forwords = function(arr) {
  print('Words done forwards:');
  for ( var i = 0; i < arr.length; ++i ) 
	print(arr[i]);
  }

var backwords = function(arr) {
  print('\nWords done backwards:');
  for ( var i = ( arr.length -1 ); i >= 0; i-- )
	print(arr[i]);
  }

forwords(words);
backwords(words);
