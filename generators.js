function* getGeneratorValue(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
} 

var myIterator = getGeneratorValue();


console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);