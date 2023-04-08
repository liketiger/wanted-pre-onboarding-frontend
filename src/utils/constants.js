const CONSTANTS = {
  API_URL: 'https://www.pre-onboarding-selection-task.shop',
  getAuth: (login, body, getValue) => ({
    method: 'POST',
    url: `/auth/${login ? 'signin' : 'signup'}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body,
    getValue
  }),
  getTodo: getValue => ({
    url: '/todos',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    },
    getValue
  }),
  addTodo: (newTodo, getValue) => ({
    url: '/todos',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: {
      todo: newTodo
    },
    getValue
  }),
  deleteTodo: (id, getValue) => ({
    url: `/todos/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    getValue
  }),
  updateTodo: (id, todo, isCompleted, getValue) => ({
    url: `/todos/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: {
      todo,
      isCompleted
    },
    getValue
  })
};

const deepFreeze = obj => {
  [...Object.getOwnPropertyNames(obj)].forEach(name => {
    const value = obj[name];
    if (value && typeof value === 'object') deepFreeze(value);
  });
  return Object.freeze(obj);
}

deepFreeze(CONSTANTS);

export default CONSTANTS;