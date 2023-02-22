import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterSetted } from '../coffeListItem/coffeeSlice';

import './filter.scss';

const Filters = () => {
    const dispacth = useDispatch();

    const [itemFilter, setItemFilter] = useState('');
    const setFilter = e => {
        dispacth(filterSetted(e.target.value.toLowerCase()));
        console.log(e.target.value);
    };

    const setFilterByCountry = e => {
        dispacth(filterSetted(e.target.innerText.toLowerCase()));
        console.log(e.target.innerText);
    };

    return (
        <div className="grid_container__filter">
            <div className="grid_container__filter__input">
                <span>Lookiing for</span>
                <input
                    type="text"
                    onChange={setFilter}
                />
            </div>
            <div className="filter__btns">
                <span onClick={setFilterByCountry}>Or filter</span>
                <button onClick={setFilterByCountry}>Russia</button>
                <button onClick={setFilterByCountry}>Brazil</button>
                <button onClick={setFilterByCountry}>All</button>
            </div>
        </div>
    );
};

export default Filters;
