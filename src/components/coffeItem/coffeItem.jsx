import React from 'react';
import { useSelector } from 'react-redux';
import { useGetItemsQuery } from '../../api/apiSlice';

const CoffeeItem = () => {
    const chosedItem = useSelector(state => state.filter.chosedItem);

    const { data: items = [] } = useGetItemsQuery();

    const renderItems = () => {
        return items
            .filter(item => item.id === chosedItem)
            .map(item => {
                return (
                    <>
                        <h1> {item.product}</h1>
                        <h2> {item.country}</h2>
                        <img
                            styles={{ width: '300px' }}
                            // onClick={() => setActive()}
                            src="https://www.shutterstock.com/image-vector/paper-zip-package-pouch-mockup-600w-1912391875.jpg"
                            alt="coffee"
                        />
                        <h3> {item.price} $</h3>
                    </>
                );
            });
    };

    const elements = renderItems();

    return <div>{elements}</div>;
};

export default CoffeeItem;
