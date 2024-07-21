import "./styles.css";
import { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import TaskDetails from "./TaskDetails";
import NotFound from "./NotFound";

export default function App() {
  const [data, setData] = useState([
    {
      title: "Take Fulffy to vet",
      detail: "Get nails clipped",
      date: "4/5/2024",
      id: "0",
    },
    {
      title: "Groceries",
      detail: "lemon, tomato, melon",
      date: "6/5/2024",
      id: "1",
    },
  ]);

  const deleteTask = function (id) {
    setData((data) => data.filter((task) => task.id != id));
  };

  const addTask = function (task) {
    setData((data) => [...data, task]);
    console.log(data);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Link to="blah">Bad Link</Link>
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route path="/create" element={<Create adder={addTask} />} />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetails data={data} deleter={deleteTask} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer>
          <a
            href="https://github.com/ahernandez214/Project-4-Note-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code on GitHub
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}
