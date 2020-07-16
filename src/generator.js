console.log('Vòng lặp vô tận');

function* generatorFunc() {
  while (true) {
    yield 'Lặp aaaaaaaaaa =))';
  }
}

const x = generatorFunc();

console.log(`Result 1`, x.next());
console.log(`Result 2`, x.next());
