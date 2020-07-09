import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import styles from "./components/Tasks.module.css";

function App() {
    const [tasks, setTasks] = useState([
        {
            task: "change engine 4",
            employee: "Dave",
            completed: false,
        },
        {
            task: "replace windshield",
            employee: "Alex",
            completed: false,
        },
        {
            task: "engine service",
            employee: "Dave",
            completed: false,
        },
        {
            task: "replace tyres",
            employee: "John",
            completed: false,
        },
    ]);

    const addTask = (task) => {
        setTasks([...tasks, { task }]);
    };

    const deleteTask = (key) => {
        const spreadTasks = [...tasks];
        spreadTasks.splice(key, 1);
        setTasks(spreadTasks);
    };

    const completeTask = (key) => {
        const spreadTasks = [...tasks];
        spreadTasks[key].completed = !spreadTasks[key].completed;
        setTasks(spreadTasks);
    };
    return (
        <div className="App">
            {tasks.map((task, key) => (
                <div className={styles.task}>
                    <div
                        style={{
                            color: task.completed ? "green" : "rgb(1, 61, 102)",
                        }}
                    >
                        {task.task}
                    </div>

                    <button onClick={() => deleteTask(key)}>-</button>
                    <button onClick={() => completeTask(key)}>Complete</button>
                </div>
            ))}
            <InputTask addTask={addTask} />
        </div>
    );
}

export default App;
