const arrayOfImages = ['001.png', '004.png', '007.png', '025.png', '039.png'];

var $leftarrow = document.getElementById('leftarrow');
var $rightarrow = document.getElementById('rightarrow');
var $dot0 = document.getElementById('0');
var $dot1 = document.getElementById('1');
var $dot2 = document.getElementById('2');
var $dot3 = document.getElementById('3');
var $dot4 = document.getElementById('4');

function clearAllDots(dot) {
  $dot0.setAttribute('class', 'far fa-circle');
  $dot1.setAttribute('class', 'far fa-circle');
  $dot2.setAttribute('class', 'far fa-circle');
  $dot3.setAttribute('class', 'far fa-circle');
  $dot4.setAttribute('class', 'far fa-circle');
  if (dot === 0) { $dot0.setAttribute('class', 'fas fa-circle'); }
  if (dot === 1) { $dot1.setAttribute('class', 'fas fa-circle'); }
  if (dot === 2) { $dot2.setAttribute('class', 'fas fa-circle'); }
  if (dot === 3) { $dot3.setAttribute('class', 'fas fa-circle'); }
  if (dot === 4) { $dot4.setAttribute('class', 'fas fa-circle'); }
  return;
}

var intervalID = setInterval(skipPokemon, 3000);

function skipPokemon() {
  var $pokemon = document.getElementById('pokemon');
  for (var i = 0; i < arrayOfImages.length; i++) {
    if ($pokemon.alt === arrayOfImages[i]) {
      if (i === 4) { i = -1 }
      i++;
      break;
    }
  }
  var nextPokemon = arrayOfImages[i];
  $pokemon.setAttribute('src', 'images/' + nextPokemon);
  $pokemon.setAttribute('alt', arrayOfImages[i]);
  clearAllDots(i);
}

$leftarrow.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  for (var i = 4; i >= 0; i--) {
    if ($pokemon.alt === arrayOfImages[i]){
      if (i === 0) {i = 5}
      i--;
      break;
    }
  }
  var nextPokemon = arrayOfImages[i];
  $pokemon.setAttribute('src', 'images/' + nextPokemon);
  $pokemon.setAttribute('alt', arrayOfImages[i]);
  clearAllDots(i);
});

$rightarrow.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  for (var i = 0; i < arrayOfImages.length; i++) {
    if ($pokemon.alt === arrayOfImages[i]) {
      if (i === 4) { i = -1 }
      i++;
      break;
    }
  }
  var nextPokemon = arrayOfImages[i];
  $pokemon.setAttribute('src', 'images/' + nextPokemon);
  $pokemon.setAttribute('alt', arrayOfImages[i]);
  clearAllDots(i);
});

$dot0.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  $pokemon.setAttribute('src', 'images/001.png');
  $pokemon.setAttribute('alt', '001.png');
  clearAllDots(0);
});

$dot1.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  $pokemon.setAttribute('src', 'images/004.png');
  $pokemon.setAttribute('alt', '004.png');
  clearAllDots(1);
});

$dot2.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  $pokemon.setAttribute('src', 'images/007.png');
  $pokemon.setAttribute('alt', '007.png');
  clearAllDots(2);
});

$dot3.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  $pokemon.setAttribute('src', 'images/025.png');
  $pokemon.setAttribute('alt', '025.pmg');
  clearAllDots(3);
});

$dot4.addEventListener('click', function (event) {
  var $pokemon = document.getElementById('pokemon');
  $pokemon.setAttribute('src', 'images/039.png');
  $pokemon.setAttribute('alt', '039.png');
  clearAllDots(4);
});
