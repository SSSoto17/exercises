// console.log("Math.random", Math.round(Math.random() * 100));

function RanNum(max) {
  return Math.round(Math.random() * max);
}

function guessNo(guess) {
  let guess;
  let rando = RanNum(100);
  // Take the guess from the submit input?
  if (guess < rando) {
    document.getElementById("result").textContent =
      "Du har ramt lidt for lavt. Prøv igen!";
  } else if (guess > rando) {
    document.getElementById("result").textContent =
      "Du har ramt lidt for højt. Prøv igen!";
  } else if (guess == rando) {
    document.getElementById("result").textContent =
      "Tillyke! Du har ramt rigtigt!";
  }
}

function displayNo() {
  let rando = RanNum(100);
  document.getElementById("result").textContent = rando;
}

// displayNo();
