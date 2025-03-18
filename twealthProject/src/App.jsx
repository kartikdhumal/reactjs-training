import React, { useState } from 'react';
import './styles/home.scss';

const App = () => {
  const [goals, setgoals] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    const existing = goals.some((goal) => goal.text === input);
    if (existing) {
      alert('Goal Already exists');
      setInput('');
      return;
    }
    if (input.trim()) {
      alert('Task Added');
      setgoals([...goals, { text: input, completed: false }]);
      setInput('');
    }
  };

  const removeTask = (index) => {
    setgoals(goals.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setgoals(goals.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <div className="input-area">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new goal..." />
        <button onClick={addTask}>Add Goal</button>
      </div>
      <ul>
        {goals.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
