const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    $jokeForm.classList.add('d-none');
    const $introStatement = this.renderJokePhrase('Hey Flash...');
    let introThis = this;
    this.appendJokePhrase($introStatement);

    setTimeout(function () {
      const $jokeSetup = introThis.renderJokePhrase(setup);
      introThis.appendJokePhrase($jokeSetup);

      setTimeout(function () {
        const $jokePunchline = introThis.renderJokePhrase(punchline);
        introThis.appendJokePhrase($jokePunchline);
        flash.laugh();
      }, 2000);
    }, 2000);
  },
  renderJokePhrase: function (phrase) {
    const $phrase = document.createElement('h4');
    $phrase.textContent = phrase;
    $phrase.className = 'fade-in text-center';
    return $phrase;
  },
  appendJokePhrase: function ($phrase) {
    $jokeContainer.append($phrase);
  }
};

const flash = {
  laughingUrl: 'images/flash-laugh.gif',

  laugh: function () {
    let flashThis = this;
    setTimeout(function () {
      $flashImage.setAttribute('src', flashThis.laughingUrl);
    }, 3000);
  }
};

function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
