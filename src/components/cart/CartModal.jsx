import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartList from '../cartList/CartList';

import './cartModal.scss';

const CartModal = () => {
    const shopingList = useSelector(state => state.cart);
    const cartModalIsActive = useSelector(state => state.cart.cartIsActive);

    if (shopingList.total.length !== 0) {
        return (
            cartModalIsActive && (
                <div
                    key={nanoid(0)}
                    className="modal__cart__window"
                >
                    <div
                        className="modal__cart__items"
                        key={nanoid()}
                    >
                        <CartList />
                    </div>

                    <div className="cart__total">
                        <h3 key={nanoid()}>
                            Total:{shopingList.total.toFixed(1)}$
                        </h3>
                        <Link to={`item`}>
                            <buttton className="btn btn__color btn__toCart">
                                CheckOut
                            </buttton>
                        </Link>
                    </div>
                </div>
            )
        );
    }
    return (
        cartModalIsActive && (
            <div className="modal__cart__window">
                <h3>No Items Added</h3>
            </div>
        )
    );
};

export default CartModal;
