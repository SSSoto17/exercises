import { $, $$ } from "../utils/dom.js";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theText =
  "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

$("p").textContent = theText;

$("button").addEventListener("click", () => {
  if (theText.includes(curseWords[0].good)) {
    $("dialog").showModal();
  }
  curseWords.forEach((word) => {
    theText = theText.replaceAll(word.bad, word.good);
  });
  $("p").textContent = theText;
});

$("#close").addEventListener("click", () => {
  $("dialog").close();
});
