function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return array
}



function whileLoop(n) {
//let n = 100;
  while (n > 0) {
    console.log(--n)
  }
return "done";
}


function doWhileLoop(array) {

  function maybeTrue() {
  return
}

do {
  array.push('')
} while (maybeTrue());
}
