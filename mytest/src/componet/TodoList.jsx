import React, { useState } from 'react';
import './TodoList.css';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [inputValue, setInputValue] = useState('');

    const addTask = (e) => {
        if (e.key === 'Enter' && inputValue) {
            setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = () => {
        if (filter === 'Completed') return tasks.filter(task => task.completed);
        if (filter === 'Pending') return tasks.filter(task => !task.completed);
        return tasks;
    };


    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={addTask}
                placeholder="Add a new task..."
            />
            <TodoFilter setFilter={setFilter} />
            <ul>
                {filteredTasks().map(task => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;