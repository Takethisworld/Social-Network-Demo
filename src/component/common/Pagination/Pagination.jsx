import React, { useState } from 'react';
import s from './pagination.module.css';
import cn from 'classnames';


let Pagination = ({ totalItems, pageSize, currentPage, onPageChange, portionSize = 10 }) => {
    let pageCount = Math.ceil(totalItems / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionPage = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            {portionNumber < 1 &&
                <button onClick={setPortionNumber(portionNumber - 1)}>Perv</button>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)}
                        key={p}
                        onClick={(e) => { onPageChange(p) }}>{p}</span>
                })}
            {portionPage > portionNumber &&
                <button onClick={setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}

export default Pagination