import React, {useContext} from 'react';
import Pagination from "../../HelperComponents/Pagination/Pagination";
import './Footer.sass';
import {AppContext} from "../../../context/appState";

function Footer() {

    const { dispatch, dispatchPage, search_data, page } = useContext(AppContext);

    const changePage = page => {
        dispatchPage(page.selected + 1, dispatch)
    };

    if(!search_data.hasOwnProperty('Search')) return null;
    return(
        <footer>
            {Math.ceil(search_data.totalResults / 10) > 1 ?
                <>
                    <span>Items per page: 10</span>
                    <Pagination active={page - 1} onChange={changePage} pageCount={Math.ceil(search_data.totalResults / 10)} />
                </>
                :
                null}
        </footer>
    )
}

export default Footer