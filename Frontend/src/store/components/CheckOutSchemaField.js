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
  street: {
    required: "This is required field.",
    pattern: { value: /^[a-zA-Z0-9]+$/, message: "This input is letters and numbers only." },
    maxLength: { value: 10, message: "This input exceed maxLength." },
  },
  address: {
    required: "This is required field.",
    pattern: { value: /^[#.0-9a-zA-Z\s,-]+$/, message: "This input is letters and numbers only." },
    maxLength: { value: 20, message: "This input exceed maxLength." },
  },
  country: {
    required: "This is required field.",
    pattern: { value: /^[a-zA-Z]+$/, message: "This input is letters only." },
    maxLength: { value: 10, message: "This input exceed maxLength." },
  },
  postalCode: {
    required: "This is required field.",
    pattern: { value: /^[0-9]+$/, message: "This input is numbers only." },
    maxLength: { value: 10, message: "This input exceed maxLength." },
  },
};
