class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.time = document.querySelector(".timer"); // таймер
    this.reset();
    this.timer(); // запуск таймера

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  timer() {
    const word = Array.from(document.querySelectorAll(".symbol"))
    setInterval(() => {
      if(this.time.textContent <= 0) {
       return this.fail();
      } else {
        this.time.textContent--
      }
    }, 1000)
  } // таймер

  registerEvents() {
    const symbol = (event) => {
      const current = this.currentSymbol;
      if(event.key === "Control" || event.key === "Alt" || event.key === "Shift") {
        return;
      } else if(current.textContent.toLowerCase().charCodeAt(0) === event.key.toLowerCase().charCodeAt(0)) {
        return this.success();
      } else {
        return this.fail();
      }
    }
    document.addEventListener("keyup", symbol)
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.time.textContent = word.length; // при появление нового слова счетчик таймера обнуляется

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

