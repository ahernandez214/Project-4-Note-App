import TaskList from "./TaskList";
export default function Home({ data }) {
  return <div className="Home"> {<TaskList data={data} />}</div>;
}