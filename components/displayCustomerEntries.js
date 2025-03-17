import dateOperations from './dateOperations.js';
import { btnSort, containerMovements } from './domElements.js';
import { currentAccountDetails } from './login.js';

// Function to display movements data
const displayMovementsData = function (accountData, sorting = false) {
  containerMovements.innerHTML = ''; // Clear previous movements

  // Combine movements and their corresponding dates
  const combineMovementsDates = accountData.movements.map((mov, index) => ({
    movement: mov,
    date: accountData.movementsDates.at(index),
  }));

  // Sort movements if sorting is enabled
  if (sorting) combineMovementsDates.sort((a, b) => a.movement - b.movement);

  // Display each movement
  combineMovementsDates.forEach(function ({ movement, date }, index) {
    const depositType = movement > 0 ? 'deposit' : 'withdrawal';
    const formattedDate = dateOperations(new Date(date));

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${depositType}">
          ${index + 1} ${depositType}
        </div>
        <div class="movements__date">${formattedDate}</div>
        <div class="movements__value">${movement}＄</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Initialize sorting functionality
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
