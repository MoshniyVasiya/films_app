import React from 'react';
import ReactPaginate from 'react-paginate';

import PrevIcon from '../../../assets/images/Arrow_1.png';
import NextIcon from '../../../assets/images/Arrow_2.png';
import './Pagination.sass';

const  Pagination = ({active, pageCount, onChange}) => {

    return (
        <div className="pagination-container">
            <ReactPaginate
                forcePage={active}
                onPageChange={onChange}
                pageCount={pageCount}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                previousLabel={<img src={PrevIcon} alt="prev icon"/>}
                nextLabel={<img src={NextIcon} alt="next icon"/>}
                containerClassName="pagination-list"
                pageClassName="pagination-item"
                pageLinkClassName="pagination-link"
                activeLinkClassName="pagination-link-active"
                breakClassName="pagination-ellipsis"
            />
        </div>
    );
};

export default Pagination;