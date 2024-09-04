export const schema = {
  review: {
    required: "Review is required",
    minLength: {
      value: 20,
      message: "Review must be at least 20 characters",
    },
  },
  rating: {
    required: "Rating is required",
    min: {
      value: 1,
      message: "Rating must be at least 1",
    },
    max: {
      value: 5,
      message: "Rating must be at most 5",
    },
  },
};
