import React, { useState } from "react";
const App = () => {
  const [todos, setTodo] = useState([]);

  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo((todos) => [...todos, { task }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
