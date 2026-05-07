const numerator = Math.round(Math.random() * 100);
const denominator = Math.round(Math.random() * 100);
console.log(`Numerator is ${numerator}`);
console.log(`Denominator is ${denominator}`);

function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (denominator === 0) {
    throw new Error("Denominator cannot be 0");
  }

  const result = numerator / denominator;
  console.log(`Result is ${result}`);
  return result;
}
try {
  console.log(divide(numerator, denominator));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Робота завершена після успішного ділення");
}
try {
  console.log(divide(numerator, 0));
} catch (error) {
  console.log("Помилка при діленні на 0: " + error.message);
} finally {
  console.log("Робота завершена після ділення на 0");
}
try {
  console.log(divide("qwerty", denominator));
} catch (error) {
  console.log("Помилка при діленні на строку: " + error.message);
} finally {
  console.log("Робота завершена після ділення на строку");
}