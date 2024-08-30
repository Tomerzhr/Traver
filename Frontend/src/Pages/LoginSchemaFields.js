export const schema = {
  email: {
    required: "This is required field.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address.",
    },
  },
  password: {
    required: "This is required field.",
    pattern: {
      value: /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
      message:
        "Password must contain at least one uppercase, one lowercase, one digit and one special character.",
    },
  },
};
