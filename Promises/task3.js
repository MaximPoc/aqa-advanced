async function getTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!response.ok) {
    throw new Error(`Todo request failed: ${response.status}`);
  }

  return response.json();
}

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!response.ok) {
    throw new Error(`User request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchData() {
  try {
    const allResults = await Promise.all([getTodo(), getUser()]);
    const [todo, user] = allResults;

    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);

    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race result:', raceResult);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

fetchData();
