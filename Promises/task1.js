function printAfterDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printAfterDelay('Hello after 2 seconds', 2000);
