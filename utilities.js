//error checking function for object
function objectChecking(val){
    if(typeof(val) === 'undefined'){
      throw "please provide some Argument value!";
    }
    if(typeof(val) !== 'object'){
      throw "Argument is not an object";
    }
}
function StringChecking(val){
    if(typeof(val) === 'undefined'){
      throw "please provide some Argument value!";
    }
    if(typeof(val) !== 'string'){
      throw "Argument is not string";
    }
}

function arrayChecking(val){
    if(typeof(val) === 'undefined'){
      throw "please provide some Argument value!";
    }
    if(typeof(val) !== 'array'){
      throw "Argument is not an array";
    }
}
//Equality checking

module.export = {
deepEquality: (obj1, obj2) => {
    objectChecking(obj1);
    objectChecking(obj2);

    var arr1 = Object.getOwnPropertyNames(obj1);
    var arr2 = Object.getOwnPropertyNames(obj2);

    for (var i = 0; i < arr1.length; i++) {
        var arrName = arr1[i];

        if (obj1[arrName] !== obj2[arrName]) {
            return false;
        }
    }
    if (arr1.length != arr2.length) {
        return false;
    }

    return true;
},

// --------------------------------------------------------------------

//unique element in array

uniqueElements: (arr) => {

  arrayChecking(arr);

  var uniq = [];
  uniq.push(arr[0]);
  // console.log("added");
  for(var i=0; i<arr.length; i++){
    var fl =0;
    for(var j= 0; j < uniq.length; j++) {
      if (arr[i] == uniq[j]) {
          fl = 1;
          break;
      }
      else {
          fl =2;
        }
    }
    if (fl == 2){
      uniq.push(arr[i]);
    }
  }
  return uniq.length;
},

//-----------------------------------------------------------------------------

//count of each character in string

countOfEachCharacterInString: (str) => {

  StringChecking(str);

    const stringArray = str.split('');
    var strObj = {};

stringArray.forEach(character => {
    if (typeof strObj[character] === 'undefined') {
        strObj[character] = 1;
    }
    else {
        strObj[character]++;
    }
});
  return strObj;
}
}
