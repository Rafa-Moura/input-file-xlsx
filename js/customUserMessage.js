export function errorMessage(element, error, fileName) {
  element.classList.remove("sucessMessage");
  element.classList.add("errorMessage");
  element.innerHTML = `${error}: ${fileName}`;
  element.value = "";
  throw new Error(error);
}

export function succesMessage(element, message, fileName) {
  element.classList.add("sucessMessage");
  element.innerHTML = `${message}: ${fileName}`;
}
