import React from "react";

export const signInValidation = (user) => {
  const { email, password } = user;

  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    alert("Incorrect email");
    return;
  }

  if (password.length < 4) {
    alert("Password must be more 4 symbols");
    return;
  }

  if (password.length > 16) {
    alert("Password must be less 16 symbols");
    return;
  }

  return true;
};
