// ==UserScript==
// @name         Olá - v0.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Igor
// @match        https://valentecolchoes.mandeumzap.com.br/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
function timeOfDay() {
  var hour = (new Date()).getHours();
  var time = "";
  if (hour < 12) {
    return time = "Bom dia";
  } else if (hour >= 12 && hour < 18) {
    return time = "Boa tarde";
  } else {
    return time = "Boa noite";
  }
}

let textArea = document.querySelectorAll(".reply-text-area");
let clientName = document.querySelector(".chat-header").querySelector("span[data-testid='message-person-name']").firstChild.nodeValue

textArea[0].value = `${timeOfDay()} ${clientName}, tudo bem com você? Aqui é o Igor da Valente Outlet`;