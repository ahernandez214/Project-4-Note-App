import { useParams, useNavigate } from "react-router-dom";

export default function TaskDeatils({ data, deleter }) {
  console.log(data);
  const { taskId } = useParams();
  const navigate = useNavigate();
  console.log("taskId: ", taskId);
  const taskObject = data.filter((e) => e.id == taskId);
  const { title, detail, date } = taskObject[0];

  const handleClick = () => {
    deleter(taskId);
    navigate("/");
  };

  return (
    <div className="Task-details">
      <article>
        <h2>{title}</h2>
        <p>{detail}</p>
        <div>{date}</div>
        <button onClick={handleClick}>Delete Task</button>
      </article>
    </div>
  );
}
