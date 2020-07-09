import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            task: "change engine 4",
        },
        {
            task: "replace windshield",
        },
        {
            task: "engine service",
        },
        {
            task: "replace tyres",
        },
    ]);

    const addTask = (task) => {
        setTasks([...tasks, { task }]);
    };

    return (
        <div className="App">
            {tasks.map((task) => (
                <div>{task.task}</div>
            ))}
            <InputTask addTask={addTask} />
        </div>
    );
}

export default App;
