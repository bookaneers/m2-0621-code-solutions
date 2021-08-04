
if (process.argv[3] === 'plus') {
  var adding = require('./add');
  console.log(adding.add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'minus') {
  var subtracting = require('./subtract');
  console.log(subtracting.subtract(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'times'){
  var multiplying = require('./multiply');
  console.log(multiplying.multiply(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'over'){
  var dividing = require('./divide');
  console.log(dividing.divide(process.argv[2], process.argv[4]));
}
