export const schema = {
  firstName: {
    required: "This is required field.",
    pattern: { value: /^[a-zA-Z]+$/, message: "This input is letters only." },
    maxLength: { value: 10, message: "This input exceed maxLength." },
  },
  lastName: {
    required: "This is required field.",
    pattern: { value: /^[a-zA-Z]+$/, message: "This input is letters only." },
    maxLength: { value: 10, message: "This input exceed maxLength." },
  },
  email: {
    required: "This is required field.",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address.",
    },
  },
  phone: {
    required: "This is required field.",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Invalid phone number.",
    },
  },
  subject: {
    required: "This is required field.",
    maxLength: { value: 20, message: "This input exceed maxLength." },
    minLength: { value: 5, message: "This input need at least 5 characters." },
  },
  message: {
    required: "This is required field.",
    maxLength: { value: 100, message: "This input exceed maxLength." },
    minLength: { value: 10, message: "This input need at least 10 characters." },
  },
};
