export const accounts = [
  {
    owner: 'Rishabh Shah',
    movements: [
      200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210,
      -1000, 8500, -30,
    ],
    interestRate: 1.2, // %
    pin: 1111,
    type: 'premium',
  },
  {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    type: 'basic',
  },
  {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    type: 'premium',
  },
  {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    type: 'standard',
  },
];

export const createUsernames = function (accounts) {
  accounts.forEach(
    accountOwnerDetail =>
      (accountOwnerDetail.username = accountOwnerDetail.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};

createUsernames(accounts);
