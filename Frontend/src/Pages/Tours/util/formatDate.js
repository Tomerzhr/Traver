export const formatDateFromInput = (inputDateString) => {
  if (!inputDateString) return "";

  // Split the input date string by "/"
  const [day, month, year] = inputDateString.split("-").map(Number);

  // Validate the date components
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.error("Invalid date components:", day, month, year);
    return "Invalid date";
  }

  // Create a new Date object with the provided day, month (0-indexed), and year
  const date = new Date(day, month - 1, year);

  // Define options for formatting the date
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  // Format the date using toLocaleDateString and remove the comma
  const formattedDate = date.toLocaleDateString("en-US", options).replace(",", "");

  return formattedDate;
};
