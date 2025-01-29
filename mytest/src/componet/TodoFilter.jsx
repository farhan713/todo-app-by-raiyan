import React from 'react';
import './TodoList.css';

const TodoFilter = ({ setFilter }) => {
    return (
        <div className='todo-btn'>
            <button className='btn btn-success btn-sm' onClick={() => setFilter('All')}>All</button>
            <button className='btn btn-success btn-sm' onClick={() => setFilter('Completed')}>Completed</button>
            <button className='btn btn-success btn-sm' onClick={() => setFilter('Pending')}>Pending</button>
        </div>
    );
};

export default TodoFilter;
