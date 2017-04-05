
function whileLoop(n) {
  while ( n > 0) {
    console.log(n--)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  var x
  do {
    x = array.pop();
  } while (array.length > 0 && maybeTrue());
  return array
}

function forLoop(array) {
  var s
  for( i = 0;  i < 25; i++) {
    let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
    array.push(s)
  }
  return array
}
