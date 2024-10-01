import { $, $$ } from "./utils/dom.js";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function showBreadcrumb(arr) {
  arr.forEach((each) => {
    $("nav").innerHTML += `
    ${
      arr.indexOf(each) === arr.length - 1
        ? `<p>${each.name}</p>`
        : `<a href=${each.link}>${each.name}</a> / `
    }`;
  });
}

$("button").addEventListener("click", () => {
  return showBreadcrumb(bc);
});
