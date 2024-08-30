export const userNormalization = (user) => {
  return {
    name: {
      first: user.firstName,
      last: user.lastName,
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    passwordConfirm: user.confirmPassword,
  };
};
