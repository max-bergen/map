var words = ["ground", "control", "to", "major", "tom"];


function map(array, callback){
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    newArray.push(array[i].length);
  }
  console.log(newArray);
  return newArray;
}

map(words, function(word) {
   return word.length;
 });

//should output [6, 7, 2, 5, 3]