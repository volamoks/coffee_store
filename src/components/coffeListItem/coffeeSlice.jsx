import {
    createEntityAdapter,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit';

import { useGetItemsQuery } from '../../api/apiSlice';

const itemsAdapter = createEntityAdapter();

const initialState = itemsAdapter.getInitialState({
    itemFilter: 'all',
    activeClass: false,
    lastItem: 6,
    chosedItem: 3,
    modalOpen: false,
    loadedItems: [],
    loading: '',
    items: [],
});

const itemSlice = createSlice({
    name: 'filter',
    initialState,

    reducers: {
        filterSetted: (state, action) => {
            state.itemFilter = action.payload;
        },
        toggleActive: state => {
            state.activeClass = !state.activeClass;
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
        changeLastItem: (state, payload) => {
            state.lastItem = state.lastItem + 3;
        },

        openModal: state => {
            state.modalOpen = !state.modalOpen;
        },
    },
    //     extraReducers: builder => {
    //         builder
    //             .addCase(useGetItemsQuery.pending, state => {
    //                 state.loading = 'pending';
    //                 state.error = null;
    //             })
    //             .addCase(useGetItemsQuery.fulfilled, (state, action) => {
    //                 state.loading = 'fulfilled';
    //                 state.items = action.payload;
    //             })
    //             .addCase(useGetItemsQuery.rejected, (state, action) => {
    //                 state.loading = 'rejected';
    //                 state.error = action.error.message;
    //             });
    //     },
});

export const filteredCoffes = createSelector(
    state => state.filter.itemFilter,
    state => state.cart.items,
    (filter, items) => (filter === 'all' ? items : items.slice(0, 6)),
);
const { actions, reducer } = itemSlice;

export const { selectAll } = itemsAdapter.getSelectors(state => state.filter);

export const {
    filterSetted,
    itemAdded,
    toggleActive,
    changeLastItem,
    quantityChanged,
    openModal,
} = actions;

export default reducer;
