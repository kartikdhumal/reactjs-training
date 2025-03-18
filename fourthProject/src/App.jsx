import { useState } from "react";
import './styles/home.scss'

function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");

  function handleAddGoal(e) {
    e.preventDefault();
    if (goal.trim() === "") {
      alert("Please enter goal");
      return;
    }
    let existing = goals.some((obj) => obj.text === goal);
    if (existing) {
      alert("Already this goal exists");
      return;
    }

    const goa = { text: goal, completed: false }
    setGoals((prev) => [...prev, goa]);
    setGoal("");
  }

  function handleDelete(myindex) {
    setGoals(goals.filter((_, index) => index !== myindex));
  }

  function handleChecked(myindex) {
    setGoals((prev) => prev.map((goal, index) => index === myindex ? { ...goal, completed: !goal.completed } : goal));
  }

  return (
    <div className="container">
      <p className="title">To Do List</p>
      <form method="post" className="operation">
        <input type="text" id="goals" className="input" value={goal} name="goals" onChange={(e) => setGoal(e.target.value)}></input>
        <button type="submit" className="btn" value={"Add Goal"} onClick={(e) => handleAddGoal(e)}>Add Goal</button>
      </form>
      <div className="mylist">
        {
          goals && goals.length > 0 ?
            <ul>
              {
                goals.map((goal, index) => (
                  <li key={index} style={{ textDecoration: goal.completed ? "line-through" : "none", color: goal.completed ? "red" : "black" }}> {index + 1 + ".  " + goal.text} <input type="checkbox" className="checkbox" onChange={() => handleChecked(index)}></input>
                    {!goal.completed && <button className="delete-btn" color="red" onClick={() => handleDelete(index)}>Delete</button>} </li>
                ))
              }
            </ul>
            :
            <div className="no-goals">
              There are no goals currently
            </div>
        }
      </div>
    </div>
  )
}

export default App
