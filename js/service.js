import { errorsType, succesTypes } from "./enums.js";
import { errorMessage, succesMessage } from "./customUserMessage.js";

export function inputFileButtonValidator(element, event) {
  if (!element.value) {
    event.preventDefault();
    errorMessage(
      textInputFile,
      errorsType.FILE_NOT_FOUND,
      returnFileName(element)
    );
  }
}

export function inputFileChangeValidor(element, textInputFile, button) {
  const { name, extension, sizeFile } = returnFileName(element);
  if (sizeFile > 20) {
    removeClass(button, "active", "hidden");
    errorMessage(
      textInputFile,
      errorsType.MAX_SIZE_OUT,
      returnFileName(element)
    );
  }

  if (!extension) {
    removeClass(button, "active", "hidden");
    errorMessage(textInputFile, errorsType.INVALID_ERROR_TYPE, name);
  } else {
    removeClass(button, "hidden", "active");

    succesMessage(textInputFile, succesTypes.VALID_FILE_TYPE, name);
  }
}

function returnFileName(file) {
  const fileData = {
    name: file.value.replace("C:\\fakepath\\", ""),
    extension: file.value.endsWith(".xlsx"),
    sizeFile: file.size,
  };

  return fileData;
}

function removeClass(element, remove, addClass) {
  element.classList.remove(remove);
  element.classList.add(addClass);
}
