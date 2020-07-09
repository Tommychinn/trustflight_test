import React, { useState } from "react";
import "./App.css";

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
    return (
        <div className="App">
            {tasks.map((task) => (
                <div>{task.task}</div>
            ))}
        </div>
    );
}

export default App;
