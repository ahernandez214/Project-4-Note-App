import { Link } from "react-router-dom";

export default function TaskList({ data }) {
  return (
    <div className="Task-List">
      {data.map((task) => (
        <div className="Task-preview">
          <Link to={`/tasks/${task.id}`}>
            <h2>{task.title}</h2>
            <p>{task.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
