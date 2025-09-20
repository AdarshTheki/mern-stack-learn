/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { menus } from './tree-views'; // importing a data tree view structure

// Tree view components / menu UI components / recursive navigation menu
export default function TreeViews() {
    return <MenuList lists={menus} />;
}

const MenuList = ({ lists }) => {
    return (
        <ul>
            {lists.map((menu) => (
                <MenuItem key={menu.label} item={menu} />
            ))}
        </ul>
    );
};

const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className='menu-item'>
            <p onClick={() => setIsOpen(!isOpen)}>
                {item.children ? item.label : <a href={item.to}>{item.label}</a>}
            </p>
            {isOpen && item.children && (
                <ul>
                    {item.children.map((child) => (
                        <MenuItem key={child.label} item={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};
