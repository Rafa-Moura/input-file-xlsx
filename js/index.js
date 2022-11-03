import { inputFileChangeValidor, inputFileButtonValidator } from "./service.js";

const input = document.querySelector("#input");
const textInputFile = document.querySelector("#textInputFile");
const button = document.querySelector("#button");

input?.addEventListener("input", (event) => {
  inputFileChangeValidor(event.target, textInputFile, button);
});

button?.addEventListener("click", (event) => {
  inputFileButtonValidator(input, event);
});
