import { accounts } from './data.js';

/**
 * Function to perform date operations and return a formatted date string.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} - A formatted date string based on the number of days passed.
 *
 * The function calculates the number of days passed between the given date and today.
 * - If the date is today, it returns 'Today'.
 * - If the date is yesterday, it returns 'Yesterday'.
 * - If the date is within the last week, it returns the number of days passed followed by 'days ago'.
 * - For dates older than a week, it formats the date as 'Day/Month/Year' using the Intl.DateTimeFormat API.
 *
 * Example usage:
 * dateOperations(new Date('2023-10-01')); // Returns '01/10/2023' if today is 2023-10-08
 */
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

  // Format date as Day/Month/Year for dates older than a week using Intl.DateTimeFormat
  const newDate = new Date(date);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Intl.DateTimeFormat(navigator.language, options).format(newDate);
};

/**
 * Function to format a movement amount as currency.
 *
 * @param {number} value - The amount to be formatted.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR').
 * @returns {string} - A formatted currency string.
 *
 * Example usage:
 * formatCurrencyAmount(1234.56, 'USD'); // Returns '$1,234.56' if the locale is en-US and currency is USD
 */
const formatCurrencyAmount = (value, currency) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export { dateOperations, formatCurrencyAmount };
