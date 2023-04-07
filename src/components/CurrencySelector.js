import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div className="col-sm">
            <label htmlFor="currency">Currency</label>
            <select
                className="form-control"
                id="currency"
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="£">£ (GBP)</option>
                <option value="$">$ (USD)</option>
                <option value="€">€ (EUR)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;