export const dispatchSearch = (data, dispatch) => {
    localStorage.setItem('search_data', JSON.stringify(data));
    dispatch({
        type: 'DISPATCH_SEARCH',
        payload: data
    })
};

export const dispatchSearchValue = (data, dispatch) => {
    localStorage.setItem('search_value', data);
    dispatch({
        type: 'DISPATCH_SEARCH_VALUE',
        payload: data
    })
};

export const dispatchPage = (data, dispatch) => {
    localStorage.setItem('page', data);
    dispatch({
        type: 'DISPATCH_PAGE',
        payload: data
    })
};

