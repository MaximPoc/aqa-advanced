function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Todo request failed: ${response.status}`);
      }
      return response.json();
    });
}

function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`User request failed: ${response.status}`);
      }
      return response.json();
    });
}

const allResults = Promise.all([getTodo(), getUser()]);
const raceResult = Promise.race([getTodo(), getUser()]);

allResults
  .then(([todo, user]) => {
    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => {
    console.error('Promise.all error:', error.message);
  });

raceResult
  .then((result) => {
    console.log('Promise.race result:', result);
  })
  .catch((error) => {
    console.error('Promise.race error:', error.message);
  });
