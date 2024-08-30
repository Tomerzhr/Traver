export const normalizeCreateTour = (tour) => {
  const {
    name,
    price,
    summary,
    imageCover,
    description,
    duration,
    maxGroupSize,
    startLocationAddress,
    difficulty,
    startLocationDescription,
    startDates,
    images,
    locations,
  } = tour;

  let startLocationCoordinates = tour.startLocationCoordinates.split(",").map((el) => +el);

  return {
    name: name,
    price: price,
    summary: summary,
    imageCover: imageCover,
    images: [images[0], images[1], images[2]],
    description: description,
    maxGroupSize: maxGroupSize,
    duration: duration,
    difficulty: difficulty,
    startDates: [startDates],
    startLocation: {
      type: "Point",
      coordinates: startLocationCoordinates,
      address: startLocationAddress,
      description: startLocationDescription,
    },

    locations: locations.map((location) => {
      let coordinates = location.coordinates.split(",").map((el) => +el);
      return {
        type: "Point",
        coordinates: coordinates,
        address: location.address,
        description: location.description,
        day: location.day,
      };
    }),
  };
};
