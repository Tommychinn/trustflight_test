import React, { useState } from "react";
import { Button } from "reactstrap";
import "./App.css";
import InputTask from "./components/InputTask";
import styles from "./components/Tasks.module.css";
import AssignModal from "./components/AssignModal";

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
        <div className={styles.tasksContainer}>
            <h2 style={{ textAlign: "center" }}>Aircraft Maintenance log</h2>
            {tasks.map((task, key) => (
                <div className={styles.task}>
                    <div className={styles.taskInfo} key={task.task}>
                        <p
                            style={{
                                color: task.completed
                                    ? "green"
                                    : "rgb(1, 61, 102)",
                            }}
                        >
                            {task.task}
                        </p>
                        <p>{task.employee}</p>
                    </div>
                    <div className={styles.changes}>
                        <Button onClick={() => deleteTask(key)}>Delete</Button>
                        <Button onClick={() => completeTask(key)}>
                            Complete
                        </Button>
                        <AssignModal
                            tasks={tasks}
                            task={task.task}
                            employee={task.employee}
                        />
                    </div>
                </div>
            ))}
            <InputTask addTask={addTask} />
        </div>
    );
}

export default App;
