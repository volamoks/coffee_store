import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import CartList from '../cartList/CartList';

import './cartPage.scss';

const CartPage = () => {
    const dispatch = useDispatch();
    const shopingList = useSelector(state => state.cart);
    return (
        <div>
            <div className="cartList__container">
                <div>Items</div>
                <div>Quantity</div>
                <div>Price</div>
            </div>
            <CartList />
            <h1 className="cart_list_total">{shopingList.items.total}</h1>
        </div>
    );
};

export default CartPage;
