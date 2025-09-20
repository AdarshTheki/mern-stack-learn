import React, { useEffect, useState } from 'react';

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');

    function handleClick(index) {
        let copySquares = [...squares];
        if (getWinning(index) || copySquares[index]) return;
        copySquares[index] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(copySquares);
    }

    function getWinning(getSquares) {
        const winningPatters = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];
        for (let i = 0; i < winningPatters.length; i++) {
            const [x, y, z] = winningPatters[i];
            if (
                getSquares[x] &&
                getSquares[x] === getSquares[y] &&
                getSquares[x] === getSquares[z]
            ) {
                return getSquares[x];
            }
        }
        return null;
    }

    function handleRestart() {
        setSquares(Array(9).fill(''));
        setIsXTurn(true);
    }

    useEffect(() => {
        if (!getWinning(squares) && squares.every((item) => item !== '')) {
            setStatus(`This is a draw ! Please restart the game.`);
        } else if (getWinning(squares)) {
            setStatus(`Winner is ${getWinning(squares)}`);
        } else {
            setStatus(`Next Player is ${isXTurn ? 'X' : 'O'}`);
        }
    }, [squares, isXTurn]);

    function Square({ index }) {
        return (
            <button className='square' onClick={() => handleClick(index)}>
                {squares[index]}
            </button>
        );
    }
    return (
        <div>
            <div className='tic-tac-toe'>
                <div className='row'>
                    <Square index={0} />
                    <Square index={1} />
                    <Square index={2} />
                </div>
                <div className='row'>
                    <Square index={3} />
                    <Square index={4} />
                    <Square index={5} />
                </div>
                <div className='row'>
                    <Square index={6} />
                    <Square index={7} />
                    <Square index={8} />
                </div>
            </div>
            <h2>{status}</h2>
            <button onClick={handleRestart}>restart</button>
        </div>
    );
}
