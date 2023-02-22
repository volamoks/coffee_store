import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

import CoffeeListItem from '../coffeListItem/coffeListItem';
import { useGetItemsQuery } from '../../api/apiSlice';
import { selectAll } from '../coffeListItem/coffeeSlice';
import {
    changeLastItem,
    filterSetted,
    aboutItem,
} from '../coffeListItem/coffeeSlice';
import ModalWindow from '../modalWindow/modalWindow';

import './coffeList.scss';

const CoffeList = () => {
    const inputValue = useSelector(state => state.filter.itemFilter);

    const {
        data: items = [],
        isFetching,
        isError,
        isSuccess,
    } = useGetItemsQuery();

    const dispatch = useDispatch();

    const lastItem = useSelector(state => state.filter.lastItem);
    const chosedItem = useSelector(state => state.filter.chosedItem);
    const loadMore = () => {
        dispatch(changeLastItem());
        dispatch(filterSetted('all'));
    };

    let weightAddedArr = items.map(item => ({ ...item, weight: 1 }));

    console.log(weightAddedArr);

    const finalItems =
        inputValue !== 'all' || inputValue.lenght === 0
            ? weightAddedArr.filter(
                  item =>
                      item.product.toLowerCase().includes(inputValue) ||
                      item.country.toLowerCase().includes(inputValue),
              )
            : weightAddedArr.slice(0, lastItem);

    const renderItems = arr => {
        isFetching && <h3>Loading</h3>;

        isSuccess && arr.length === 0 && <h3>items is not loaded </h3>;

        return arr.map(({ id, ...props }) => {
            return (
                <Link
                    key={nanoid()}
                    to="/items"
                >
                    <div
                        key={nanoid()}
                        className="grid_container_list"
                        // onClick={() => loadMoreAboutitem(id)}
                    >
                        <CoffeeListItem
                            key={nanoid()}
                            id={id}
                            {...props}
                        />
                    </div>
                </Link>
            );
        });
    };

    const elements = renderItems(finalItems);

    return (
        <div>
            <div className="grid_container_list">{elements}</div>
            <button
                className="btn btn__active btn__light"
                style={{ width: '150px' }}
                onClick={() => loadMore()}
            >
                load More
            </button>
        </div>
    );
};

export default CoffeList;
