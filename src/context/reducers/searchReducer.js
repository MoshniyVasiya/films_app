export const initialSearchState = {
    search_data: JSON.parse(localStorage.getItem('search_data')),
    search_value: localStorage.getItem('search_value'),
    page: localStorage.getItem('page'),
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