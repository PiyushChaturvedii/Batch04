import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter_control'>
                <label>Filter by year</label>
                <select>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>

        </div>
    )
}


export default ExpensesFilter;