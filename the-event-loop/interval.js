
var count = 3;

var rocketLaunch = setInterval(launch, 1000);

function launch() {
  console.log(count--);
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(rocketLaunch);
  }
};
