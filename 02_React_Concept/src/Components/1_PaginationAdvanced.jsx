/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

function PaginationAdvanced({ currentPage, totalPage, onChangePage }) {
    const renderPageNumbers = () => {
        const pages = [];
        const totalPagesToShow = 3;
        const halfTotalPagesToShow = Math.floor(totalPagesToShow / 2);
        let startPage = Math.max(1, currentPage - halfTotalPagesToShow);
        let endPage = Math.min(totalPage, startPage + totalPagesToShow - 1);

        if (totalPage <= totalPagesToShow) {
            startPage = 1;
            endPage = totalPage;
        } else if (currentPage <= halfTotalPagesToShow) {
            endPage = totalPagesToShow;
        } else if (currentPage >= totalPage - halfTotalPagesToShow) {
            startPage = totalPage - totalPagesToShow + 1;
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onChangePage(i)}
                    className={i === currentPage ? 'active' : ''}>
                    {i}
                </button>
            );
        }

        if (startPage > 1) {
            pages.unshift(
                <button key='prevDots' onClick={() => onChangePage(startPage - 1)}>
                    ...
                </button>
            );
        }

        if (endPage < totalPage) {
            pages.push(
                <button key='nextDots' onClick={() => onChangePage(endPage + 1)}>
                    ...
                </button>
            );
        }

        return pages;
    };

    return (
        <div className='pagination'>
            <button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1}>
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => onChangePage(currentPage + 1)}
                disabled={currentPage === totalPage}>
                Next
            </button>
        </div>
    );
}

export default function Test() {
    const [currentPage, setCurrentPage] = useState(1);

    const onChangeHandler = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container>
            <PaginationAdvanced
                onChangePage={onChangeHandler}
                totalPage={100}
                currentPage={currentPage}
            />
        </Container>
    );
}

const Container = styled.div`
    .pagination {
        .active {
            background: lightblue;
        }
    }
`;
