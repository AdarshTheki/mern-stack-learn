import React, { useEffect, useState } from 'react';
import { products } from './dummyData';

export default function SearchAutoComplete() {
    const [user, setUser] = useState(products.map((i) => i.title));
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filterUser, setFilterUser] = useState([]);

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filter =
                user && user.length
                    ? user.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilterUser(filter);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        setSearchParam(event.target.innerText);
    }

    return (
        <div>
            <input
                value={searchParam}
                onChange={handleChange}
                type='text'
                placeholder='search users'
            />
            <button>Search</button>
            <br />
            {showDropdown && <Suggestions data={filterUser} handleClick={handleClick} />}
        </div>
    );
}

function Suggestions({ data, handleClick }) {
    return (
        <ul>
            {data && data.length
                ? data.map((item) => (
                      <li key={item} onClick={handleClick}>
                          {item}
                      </li>
                  ))
                : null}
        </ul>
    );
}
