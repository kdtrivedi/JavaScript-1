//error checking function
function numberChecking(val){
  if (isNaN(val)){
   throw "Argument is not number!";
  }
  if(val < 1){
  throw "value should be greater than 0";
  }
}

//Volume of recrangukar prism
module.exports = {
volumeOfRectangularPrism: (length, width, height) => {
    numberChecking(length);
    numberChecking(width);
    numberChecking(height);
  return length * width * height;
},
// console.log(volumeOfRectangularPrism(0,5,5));

//Surface Area of recrangukar prism
surfaceAreaOfRectangularPrism: (length, width, height) => {
    numberChecking(length);
    numberChecking(width);
    numberChecking(height);
  return (2 *((length * width) + (length * height) + (width * height)));
},
// console.log(surfaceAreaOfRectangularPrism(1,1,0));

//Volume of sphere
volumeOfSphere: (radius) => {
  numberChecking(radius);
  return ((4/3)* Math.PI * (radius * radius * radius));
},
// console.log(volumeOfSphere(-1));

//Surface Area of volumeOfSphere
surfaceAreaOfSphere: (radius) => {
  numberChecking(radius);
  return (4 * Math.PI * (radius * radius));
}
// console.log(surfaceAreaOfSphere(0));
}
