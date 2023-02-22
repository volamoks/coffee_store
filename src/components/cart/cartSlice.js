import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { itemAdded } from '../coffeListItem/coffeeSlice';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    items: [],
    total: '',
    itemPrice: '',
    cartIsActive: false,
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const { id, product, price, quantity = 1 } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            index === -1
                ? state.items.push({ id, product, price, quantity, weight: 1 })
                : state.items[index].quantity++;
            state.total = state.items
                .map(item => item.quantity * item.price * item.weight)
                .reduce((acc, cur) => acc + cur);
            state.cartIsActive = true;
        },

        changeValue: (state, action) => {
            const { id, value } = action.payload;
            const index = state.items.findIndex(
                item => item.id === action.payload.id,
                console.log(id, value),
            );
            switch (action.payload.value) {
                case '-':
                    state.items[index].quantity > 0
                        ? state.items[index].quantity--
                        : state.items.splice(index, 1);
                    break;
                case '+':
                    state.items[index].quantity++;
                    break;
            }
            state.total = state.items
                .map(item => item.quantity * item.price * item.weight)
                .reduce((acc, cur) => acc + cur);
        },

        quantityChanged: (state, action) => {
            const { id, value } = action.payload;
            console.log(id, value);
            const index = state.items.findIndex(item => (item.id = id));
            state.items[index].weight = 1;
            switch (value) {
                case '-':
                    state.items[index].weight = state.items[index].weight - 0.2;
                    break;
                case '+':
                    state.items[index].weight = state.items[index].weight + 0.2;
                    break;
            }
        },

        removeItems: (state, action) => {
            const { id } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                const item = state.items[index];
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.items.splice(index, 1);
                }
                state.total -= item.price;
            }
        },
        toogleCartActive: state => {
            state.cartIsActive = !state.cartIsActive;
        },
    },
});

const { actions, reducer } = cartSlice;

export const { selectAll } = cartAdapter.getSelectors(state => state);

export const {
    addItems,
    removeItems,
    toogleCartActive,
    changeValue,
    quantityChanged,
} = actions;

export default reducer;
