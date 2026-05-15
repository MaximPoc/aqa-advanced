const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2 = {
  brand: "BMW",
  model: "X5",
  owner: 2026, // в задачі вказано ввести рік випуску авто
};

const car3 = { ...car1, ...car2 };

console.log(car3);
