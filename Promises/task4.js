class TodoApi {
  async getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error(`Todo request failed: ${response.status}`);
    }

    return response.json();
  }
}

class UserApi {
  async getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error(`User request failed: ${response.status}`);
    }

    return response.json();
  }
}

async function fetchDataWithClasses() {
  const todoApi = new TodoApi();
  const userApi = new UserApi();

  try {
    const allResults = await Promise.all([todoApi.getTodo(), userApi.getUser()]);
    const [todo, user] = allResults;

    console.log('Promise.all result:');
    console.log('Todo:', todo);
    console.log('User:', user);

    const raceResult = await Promise.race([todoApi.getTodo(), userApi.getUser()]);
    console.log('Promise.race result:', raceResult);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

fetchDataWithClasses();
