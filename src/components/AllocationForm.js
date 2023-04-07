import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, expenses } = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState(expenses[0].name);
    const [cost, setCost] = useState('');
    const [operation, setOperation] = useState('add');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleCostChange = (event) => {
        setCost(event.target.value);
    };

    const handleOperationChange = (event) => {
        setOperation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cost && selectedCategory) {
            if (operation === 'add') {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: { name: selectedCategory, cost: parseFloat(cost) },
                });
            } else {
                dispatch({
                    type: 'RED_EXPENSE',
                    payload: { name: selectedCategory, cost: parseFloat(cost) },
                });
            }
            setCost('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='operation'>Operation</label>
                    <select
                        className='form-control'
                        id='operation'
                        value={operation}
                        onChange={handleOperationChange}
                    >
                        <option value='add'>Add</option>
                        <option value='subtract'>Subtract</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor='category'>Category</label>
                    <select
                        className='form-control'
                        id='category'
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        {expenses.map((expense) => (
                            <option key={expense.id} value={expense.name}>
                                {expense.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Amount </label>
                    <input
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={handleCostChange}
                    />
                </div>
            </div>
            <button type='submit' className='btn btn-primary mt-3'>
                {operation === 'add' ? 'Add' : 'Subtract'}
            </button>
        </form>
    );
};

export default AllocationForm;