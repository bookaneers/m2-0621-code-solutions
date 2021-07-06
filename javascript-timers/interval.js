var secs = 3;
var intervalID = setInterval(callback, 1000);

function callback() {
  if (secs === 0) {
    document.querySelector("h1").textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
    return;
  }
  document.querySelector("h1").textContent = secs;
  secs -=1;
}
