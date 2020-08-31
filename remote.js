//Create and array of your choice of length and elements then write a JavaScript program to remove duplicate items from an array

arry = [];

for (i = 0; i < 10; i++) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  arry.push(randomNumber);
}

function usingSet(data) {
  return new Set(data);
}

function usingForEach(data) {
  let unique = [];
  data.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

function usingFilter(data){
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log('Using Set')
console.log(usingSet(arry));
console.log("");
console.log('For Each')
console.log(usingForEach(arry));
console.log("");
console.log('Using Filter')
console.log(usingFilter(arry));


