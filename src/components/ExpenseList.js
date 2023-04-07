import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
            ))}
        </ul>
    );
};

export default ExpenseList;