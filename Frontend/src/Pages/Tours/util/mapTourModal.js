const mapTourModal = (tour) => {
  return {
    description: tour.description,
    difficulty: tour.difficulty,
    duration: tour.duration,
    maxGroupSize: tour.maxGroupSize,
    name: tour.name,
    price: tour.price,
    summary: tour.summary,
  };
};

export default mapTourModal;
