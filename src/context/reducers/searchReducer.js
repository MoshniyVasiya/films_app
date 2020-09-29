export const initialSearchState = {
    search_data: {},
    search_value: '',
    page: 1,
};

export const SearchReducer = (state, action) => {
    switch(action.type) {
        case 'DISPATCH_SEARCH':
            return {
                ...state,
                search_data: action.payload,
            };
        case 'DISPATCH_SEARCH_VALUE' :
            return {
                ...state,
                search_value: action.payload,
            };
        case 'DISPATCH_PAGE' :
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};