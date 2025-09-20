import React from 'react';
import styled from 'styled-components';

const options = Array.from({ length: 10 }, (_, index) => `Item - ${index}`);

function DropdownMenu() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        // Function to handle clicks outside the dropdown
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                return setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Container>
            <div ref={dropdownRef} className='custom-dropdown'>
                <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
                {isOpen && (
                    <ul className='custom-dropdown-modal'>
                        {options.map((option, index) => (
                            <li key={index}>
                                <a href={option}>{option}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Container>
    );
}

export default DropdownMenu;

const Container = styled.div`
    .custom-dropdown {
        border: 1px solid red;
        width: fit-content;
        position: relative;
    }
    .custom-dropdown-modal {
        position: absolute;
        top: 35px;
        left: 0;
        right: 0;
        background: #333;
        border-radius: 1vmax;
        padding: 20px;
        list-style: none;
    }
`;
