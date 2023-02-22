import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { changeValue } from '../cart/cartSlice';

const CartList = () => {
    const shopingList = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const changeItem = (value, id) => {
        dispatch(changeValue({ value, id }));
    };

    const renderItems = () => {
        return (
            shopingList.items.length > 0 &&
            shopingList.items.map(item => (
                <div
                    key={nanoid()}
                    className="modal__cart"
                >
                    <div
                        key={nanoid()}
                        className="modal__item__namee"
                    >
                        {item.product}
                    </div>
                    <button
                        key={nanoid()}
                        onClick={e => changeItem(e.target.textContent, item.id)}
                        className="btn btn__quantity"
                    >
                        -
                    </button>
                    <div
                        key={nanoid()}
                        className="modal__item__quantity"
                    >
                        {item.quantity}pc.
                    </div>
                    <button
                        key={nanoid()}
                        onClick={e => changeItem(e.target.textContent, item.id)}
                        className="btn btn__quantity"
                    >
                        +
                    </button>
                    <div
                        key={nanoid()}
                        className="modal__item__price"
                    >
                        {item.price}
                    </div>
                </div>
            ))
        );
    };

    const elements = renderItems();

    return <div>{elements}</div>;
};

export default CartList;
