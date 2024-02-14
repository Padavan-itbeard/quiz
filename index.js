import { press } from "./quizHelper.js"

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  const container = document.getElementById('quiz');

  button.innerText = "Press";
  button.onclick = press;

  container.appendChild(button);
});