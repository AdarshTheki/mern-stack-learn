import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        border: '2px solid black',
        padding: '10px',
    };

    return (
        <div style={styles}>
            <NavLink
                style={(isActive) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                to='/'>
                Home
            </NavLink>
            <NavLink
                style={(isActive) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                to='/about'>
                About
            </NavLink>
            <NavLink
                style={(isActive) => ({
                    color: isActive ? 'green' : 'blue',
                })}
                to='/github'>
                GitHib DataLoader
            </NavLink>
        </div>
    );
};

export default Header;
