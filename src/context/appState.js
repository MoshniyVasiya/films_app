import React, { createContext, useReducer } from 'react';
import combineReducers from 'react-combine-reducers';

import { SearchReducer, initialSearchState } from './reducers/searchReducer';
import * as searchActions from './actions/searchActions';

export const AppContext = createContext({
    ...initialSearchState,
});

export const AppProvider = ({ children }) => {
    const [rootReducerCombined, initialStateCombined] = combineReducers({
        SearchReducer: [SearchReducer, initialSearchState],
    });

    const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

    const allActions = {
        ...searchActions,
    };
    return (
        <AppContext.Provider value={{
            ...allActions,

            dispatch: dispatch,

            search_data: state.SearchReducer.search_data,
            search_value: state.SearchReducer.search_value,
            page: state.SearchReducer.page,

        }}>
            {children}
        </AppContext.Provider>
    );
};