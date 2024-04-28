export const checkValidData = (email, password) => {
  // const isNameValid = /^[0-9A-Za-z]{6,16}$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  // if (!isNameValid) return "Usename is Not valid";
  if (!isEmailValid) return "Email is Not Vaild";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
