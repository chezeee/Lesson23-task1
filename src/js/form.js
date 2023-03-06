/* form.js */
import { firstName, lastName } from "./index.js";

export const getFullName = () => {
  return `${firstName.value} ${lastName.value}`;
};
