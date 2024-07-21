import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Create({ adder }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const task = {
      title: taskTitle,
      detail: taskDetails,
      date: taskDate,
      id: newId,
    };
    console.log(JSON.stringify(task));
    adder(task);
    setTaskTitle("");
    setTaskDetails("");
    setTaskDate("");
  };
  return (
    <div className="create">
      <h2>Add a new Note </h2>
      <form onSubmit={handleSubmit}>
        <label>Note Title:</label>
        <input
          type="text"
          required
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <label>Note Content:</label>
        <input
          type="text"
          required
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />
        <label>Due Date:</label>
        <input
          type="text"
          required
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <button>Add Note!</button>
      </form>
    </div>
  );
}
