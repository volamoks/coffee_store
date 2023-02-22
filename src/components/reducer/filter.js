const initialState = {
    items: [],
    itemFilter: 'all',
    itemsIncart: [],
    activeClass: false,
    openModal: true,
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_FILTER':
            return {
                ...state,
                filters: action.payload,
            };

        case 'ACTIVE_FILTER':
            // const initList = state.heroes;
            return {
                ...state,
                activeFilter: action.payload,
            };

        default:
            return state;
    }
};

export default filter;
