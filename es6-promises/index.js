const takeAChance = require('./take-a-chance');

let p = takeAChance('Fernando');

p.then((message) => {
  console.log(message);
}).catch((e) => {
  console.log(e.message);
});
