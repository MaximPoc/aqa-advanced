const person = {
  firstName: "Марія",
  lastName: "Коваленко",
  age: 30,
};

person.email = "test@test.com";

delete person.age;

console.log(person);
