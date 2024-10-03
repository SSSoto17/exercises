import { $, $$ } from "../utils/dom.js";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const selector = $("select");
const locale = selector.options[selector.selectedIndex].value;

switchLang(locale);

function switchLang(locale) {
  texts[locale].texts.forEach((el) => {
    $(el.location).textContent = el.text;
  });
}

selector.addEventListener("click", (e) => {
  switchLang(e.target.value);
});
