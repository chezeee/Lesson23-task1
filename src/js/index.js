import { getFullName } from "./form.js";

export const firstName = document.querySelector("#first-name");
export const lastName = document.querySelector("#last-name");
const fullName = document.querySelector("#full-name");

const updateFullName = () => {
  fullName.textContent = getFullName();
};

firstName.addEventListener("keyup", () => updateFullName());
lastName.addEventListener("keyup", () => updateFullName());
