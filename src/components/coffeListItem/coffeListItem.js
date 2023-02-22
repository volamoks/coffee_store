import { useDispatch, useSelector } from 'react-redux';
import '../../style.scss';
import { toggleActive } from './coffeeSlice';
import { addItems, deleteItems } from '../cart/cartSlice';
import { nanoid } from '@reduxjs/toolkit';

import { quantityChanged } from '../cart/cartSlice';

import './coffeeListItem.scss';

const CoffeeItem = ({ id, product, country, price, weight }) => {
    
    const selectedItem = useSelector(state => state.cart.item);

    const dispatch = useDispatch();

    const setActive = () => {
        dispatch(toggleActive());
    };

    const addItem = () => {
        dispatch(addItems({ id, product, country, price }));
    };

    const changeValue = (id, value) => {
        console.log(weight);
        console.log(id, value);
        dispatch(quantityChanged({ id, value }));
    };

    return (
        <div className="grid_container_list_items">
            <div
                key={nanoid()}
                className="grid_container_list_item"
            >
                <img
                    onClick={() => setActive()}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBpwpTjrKG3zVn2xTi-9e1dnkniGOK6js7g&usqp=CAU"
                    alt="coffee"
                />
                {product}
                <span>{country}</span>
                <div
                    key={id}
                    className="grid_container_coffee_price"
                >
                    <span style={{ fontStyle: 'italic' }}>{price} $</span>
                    <div>
                        <button
                            className="btn btn__no_border btn__change__quantity"
                            onClick={e => changeValue(id, e.target.textContent)}
                        >
                            -
                        </button>
                        <span style={{ fontStyle: 'italic' }}>{weight} kg</span>
                        <button
                            className="btn btn__no_border btn__change__quantity"
                            onClick={e => changeValue(id, e.target.textContent)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <button
                    className="btn btn__color"
                    onClick={() => addItem()}
                >
                    In cart
                </button>
            </div>
        </div>
    );
};

export default CoffeeItem;
