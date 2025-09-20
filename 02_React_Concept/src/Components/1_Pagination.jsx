/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { products } from './dummyData';
import styled from 'styled-components';

function Pagination({ currentPage, totalPage = 10, onPageChange }) {
    function generateNoOfPages() {
        let pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div className='pagination'>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                previous
            </button>
            {generateNoOfPages().map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? 'active' : ''}>
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPage}>
                next
            </button>
        </div>
    );
}

export default function PaginationTest() {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentListOfItems = products.slice(indexOfFirstItem, indexOfLastItem);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    return (
        <Container>
            <ul>
                {currentListOfItems.map((listItem) => (
                    <li key={listItem.id}>{`${listItem.id}. ${listItem.title}`}</li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPage={Math.ceil(products.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </Container>
    );
}

const Container = styled.div`
    .pagination {
        width: 100%;
        display: flex;
        gap: 10px;
    }
    .pagination button {
        padding: 5px 15px;
        margin: 0 1px;
        outline: none;
    }
    .pagination .active {
        background-color: #2196f3;
    }
`;
