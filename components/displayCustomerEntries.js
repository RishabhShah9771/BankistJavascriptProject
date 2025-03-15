import { btnSort, containerMovements } from './domElements.js';
import { currentAccountDetails } from './login.js';

const displayMovementsData = function (movements, sorting = false) {
  containerMovements.innerHTML = '';

  // Sorting Movements
  const movementSorting = sorting
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  movementSorting.forEach(function (movValue, index) {
    const depositType = movValue > 0 ? 'deposit' : 'withdrawal';

    const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${depositType}"> ${
      index + 1
    } ${depositType}</div>
                <div class="movements__date">3 days ago</div>
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
    displayMovementsData(currentAccountDetails.movements, !sortedList);
    sortedList = !sortedList;
  });
};

initializeDisplayMovements();

export default displayMovementsData;
