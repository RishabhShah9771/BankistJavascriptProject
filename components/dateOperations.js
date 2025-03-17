// Function to format date as Day/Month/Year
const dateOperations = date => {
  // Function to calculate the number of days passed between two dates
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // Calculate days passed from the given date to today
  const daysPassed = calcDaysPassed(new Date(), date);

  // Return formatted date based on the number of days passed
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // Format date as Day/Month/Year for dates older than a week
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export default dateOperations;
