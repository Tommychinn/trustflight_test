import React, { useState } from "react";

const InputTask = ({ addTask }) => {
    const [input, setInput] = useState("");

    const submitTask = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit={submitTask}>
            <input
                type="text"
                name="task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default InputTask;
