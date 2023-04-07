import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        dispatch({ type: 'SET_BUDGET', payload: parseFloat(newBudget) });
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setNewBudget(event.target.value);
    };

    return (
        <div className='col-sm'>
            <div className='card text-center'>
                <div className='card-body'>
                    <h5 className='card-title'>Budget</h5>
                    {isEditing ? (
                        <div className='input-group'>
                            <input
                                type='number'
                                className='form-control'
                                value={newBudget}
                                onChange={handleInputChange}
                            />
                            <div className='input-group-append'>
                                <button className='btn btn-primary' onClick={handleSaveClick}>
                                    Save
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className='card-text' onClick={handleEditClick}>
                            {currency} {budget}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Budget;