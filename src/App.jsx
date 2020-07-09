import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import styles from "./components/Tasks.module.css";

function App() {
    const [tasks, setTasks] = useState([
        {
            task: "change engine 4",
            employee: "Dave",
        },
        {
            task: "replace windshield",
            employee: "Alex",
        },
        {
            task: "engine service",
            employee: "Dave",
        },
        {
            task: "replace tyres",
            employee: "John",
        },
    ]);

    const addTask = (task) => {
        setTasks([...tasks, { task }]);
    };

    return (
        <div className="App">
            {tasks.map((task) => (
                <div className={styles.task}>
                    <div>{task.task}</div>

                    <button
                        onClick={(key) => {
                            const spreadTasks = [...tasks];
                            spreadTasks.splice(key, 1);
                            setTasks(spreadTasks);
                        }}
                    >
                        -
                    </button>
                </div>
            ))}
            <InputTask addTask={addTask} />
        </div>
    );
}

export default App;
