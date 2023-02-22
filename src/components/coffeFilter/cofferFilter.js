import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { filterSetted } from '../coffeListItem/coffeeSlice';

import './coffeeFilter.scss';

const CoffeeFilters = () => {
    const filtersArr = ['Russia', 'Brazil', 'All'];

    const dispacth = useDispatch();

    const setFilter = value => {
        dispacth(filterSetted(value.toLowerCase()));
    };

    const countryFilter = useSelector(state => state.filter.itemFilter);

    const createFilters = () => {
        return filtersArr.map(filter => {
            return (
                <button
                    className={
                        countryFilter === filter.toLowerCase()
                            ? 'btn btn__light btn__active'
                            : 'btn btn__light'
                    }
                    onClick={e => setFilter(e.target.innerText)}
                >
                    {filter}
                </button>
            );
        });
    };

    const filterElements = createFilters();

    return (
        <div className="grid_container__filter">
            <div className="grid__container__filter_input">
                <span className="filter">Looking for</span>
                <input
                    type="text"
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className="grid__container__filter_btn">
                <span
                    className="filter"
                    onClick={e => setFilter(e.target.innerText)}
                >
                    Or filter
                </span>
                {filterElements}
            </div>
        </div>
    );
};

export default CoffeeFilters;
