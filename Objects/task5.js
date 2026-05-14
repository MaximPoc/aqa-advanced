const users = [
  { name: "Олексій", email: "oleksii@example.com", age: 25 },
  { name: "Наталія", email: "natalia@example.com", age: 32 },
  { name: "Дмитро", email: "dmytro@example.com", age: 28 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
