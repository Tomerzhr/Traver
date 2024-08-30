export const schema = {
  name: {
    required: "This is required field.",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters.",
    },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Invalid name.",
    },
  },
  image: {
    pattern: {
      value:
        /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\/.*\.(?:png|jpg)|^www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\/.*\.(?:png|jpg)$/,
      message: "Invalid image URL.",
    },
  },
  duration: {
    required: "This is required field.",
    pattern: {
      value: /^[0-9]{1,}$/,
      message: "Invalid duration.",
    },
  },
  maxGroupSize: {
    required: "This is required field.",
    pattern: {
      value: /^[0-9]{1,}$/,
      message: "Invalid group size.",
    },
  },
  difficulty: {
    required: "This is required field.",
    pattern: {
      value: /^(easy|medium|difficult)$/,
      message: "Invalid difficulty.",
    },
  },
  price: {
    required: "This is required field.",
    pattern: {
      value: /^[0-9]{1,}$/,
      message: "Invalid price.",
    },
  },
  summary: {
    required: "This is required field.",
    minLength: {
      value: 40,
      message: "Description must be at least 40 characters.",
    },
    maxLength: {
      value: 75,
      message: "Description must be at most 75  characters.",
    },
  },
  description: {
    required: "This is required field.",
    minLength: {
      value: 80,
      message: "Description must be at least 80 characters.",
    },
  },
  imageCover: {
    required: "This is required field.",
  },
  tourImage: {
    required: "This is required field.",
  },
  startDates: {
    required: "This is required field.",
    pattern: {
      value:
        /^(((20[012]\d|19\d\d)|(1\d|2[0123]))-((0[0-9])|(1[012]))-((0[1-9])|([12][0-9])|(3[01])))|(((0[1-9])|([12][0-9])|(3[01]))-((0[0-9])|(1[012]))-((20[012]\d|19\d\d)|(1\d|2[0123])))|(((20[012]\d|19\d\d)|(1\d|2[0123]))\/((0[0-9])|(1[012]))\/((0[1-9])|([12][0-9])|(3[01])))|(((0[0-9])|(1[012]))\/((0[1-9])|([12][0-9])|(3[01]))\/((20[012]\d|19\d\d)|(1\d|2[0123])))|(((0[1-9])|([12][0-9])|(3[01]))\/((0[0-9])|(1[012]))\/((20[012]\d|19\d\d)|(1\d|2[0123])))|(((0[1-9])|([12][0-9])|(3[01]))\.((0[0-9])|(1[012]))\.((20[012]\d|19\d\d)|(1\d|2[0123])))|(((20[012]\d|19\d\d)|(1\d|2[0123]))\.((0[0-9])|(1[012]))\.((0[1-9])|([12][0-9])|(3[01])))$/,
      message: "Invalid start dates.",
    },
  },
  startLocation: {
    required: "This is required field.",
    pattern: {
      value: /^[a-zA-Z]{2,}$/,
      message: "Invalid start location.",
    },
  },
  locations: {
    required: "This is required field.",
    pattern: {
      value: /^[0-9]{1,}$/,
      message: "Invalid locations.",
    },
  },
  coordinates: {
    required: "This is required field.",
    pattern: {
      value:
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/,
      message: "coordinates must be in format: lat,lng",
    },
  },
  address: {
    required: "This is required field.",
    minLength: {
      value: 5,
      message: "Description must be at least 5 characters.",
    },
  },
  startLocationDescription: {
    required: "This is required field.",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters.",
    },
  },
};
