import { btnSort, containerMovements } from './domElements.js';

import { currentAccountDetails } from './login.js';

const fetchDate = function (date) {
  // Date Format
  // Day / Month / Year
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const year = newDate.getFullYear();

  const displayDate = `${day}/${month}/${year}`;
  return displayDate;
};

const displayMovementsData = function (accountData, sorting = false) {
  containerMovements.innerHTML = '';

  // Sorting Movements
  const movementSorting = sorting
    ? accountData.movements.slice().sort((a, b) => a - b)
    : accountData.movements;

  movementSorting.forEach(function (movValue, index) {
    const depositType = movValue > 0 ? 'deposit' : 'withdrawal';

    const userDate = new Date(accountData.movementsDates[index]);
    const formattedDate = fetchDate(userDate);

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${depositType}"> ${
      index + 1
    } ${depositType}</div>
          <div class="movements__date">${formattedDate}</div>
          <div class="movements__value">${movValue}€</div>
        </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let sortedList = false;
const initializeDisplayMovements = function () {
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovementsData(currentAccountDetails, !sortedList);
    sortedList = !sortedList;
  });
};

initializeDisplayMovements();

export default displayMovementsData;
