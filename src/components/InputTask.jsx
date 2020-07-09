import React, { useState } from "react";
import styles from "./Tasks.module.css";

const InputTask = ({ addTask }) => {
    const [input, setInput] = useState("");

    const submitTask = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form className={styles.input} onSubmit={submitTask}>
            <input
                className={styles.task}
                type="text"
                placeholder="add new task"
                name="task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default InputTask;
