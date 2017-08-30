function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(n--);
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array.pop();
  } while (array.length >= 0 && maybeTrue()) {
    array.pop();
  }
}
