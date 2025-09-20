/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Test() {
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <div>
            <h2>Modal</h2>

            {/* Stacked Modal */}
            <h3>Stacked Modals</h3>
            <button onClick={() => setModal1Open(true)}>Open Modal 1</button>
            <StackedModal isOpen={modal1Open} onClose={() => setModal1Open(false)}>
                <h2>Modal 1 Content</h2>
                <p>This is the content of modal 1.</p>
            </StackedModal>

            <h3>Stacked Modal + Click Outside Dismiss</h3>
            <button onClick={() => setModal2Open(true)}>Open Modal 2</button>
            <Modal isOpen={modal2Open} onClose={() => setModal2Open(false)}>
                <h2>Modal 2 Content</h2>
                <p>This is the content of modal 2.</p>
            </Modal>
        </div>
    );
}

// Advanced Level Modal 2
function Modal({ isOpen, onClose, children }) {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleEscapeKey);
        return () => document.removeEventListener('mousedown', handleEscapeKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <Container>
            <div className='modal-overlay' onClick={handleOverlayClick}>
                <div className='modal'>
                    <button className='close' onClick={onClose}>
                        close
                    </button>
                    {children}
                </div>
            </div>
        </Container>
    );
}

// Simple Way Modal 1
function StackedModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <Container>
            <div className='modal-overlay'>
                <div className='modal'>
                    <button className='close' onClick={onClose}>
                        close
                    </button>
                    {children}
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-overlay .modal {
        position: relative;
        max-width: 80%;
        margin: auto;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    .modal .close {
        position: absolute;
        top: 0px;
        right: 0px;
    }
`;
