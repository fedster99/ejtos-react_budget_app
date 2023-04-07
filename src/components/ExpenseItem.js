// src/components/ExpenseItem.js

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ expense }) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({ type: 'DELETE_EXPENSE', payload: expense.name });
    };

    const handleAddTen = () => {
        dispatch({ type: 'ADD_EXPENSE', payload: { name: expense.name, cost: 10 } });
    };

    const handleSubtractTen = () => {
        dispatch({ type: 'RED_EXPENSE', payload: { name: expense.name, cost: 10 } });
    };

    const textBlack = {
        color: 'black',
    };

    const buttonSpacing = {
        marginRight: '10px',
    };

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span style={textBlack}>{expense.name}</span>
            <div>
                <span className='badge badge-primary badge-pill mr-3' style={textBlack}>
                    {currency}{expense.cost}
                </span>
                <button
                    type='button'
                    className='btn btn-success btn-sm'
                    style={buttonSpacing}
                    onClick={handleAddTen}
                >
                    +10
                </button>
                <button
                    type='button'
                    className='btn btn-warning btn-sm'
                    style={buttonSpacing}
                    onClick={handleSubtractTen}
                >
                    -10
                </button>
                <button
                    type='button'
                    className='btn btn-danger btn-sm'
                    onClick={handleDeleteExpense}
                >
                    &times;
                </button>
            </div>
        </li>
    );
};

export default ExpenseItem;