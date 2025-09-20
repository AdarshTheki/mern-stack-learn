import React, { useEffect } from 'react';
import { useState } from 'react';

export default function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`, {
                method: 'GET',
            });
            const result = await res.json();
            setExchangeRate(result?.rates[toCurrency]);
        };

        fetchExchangeRate();
    }, [toCurrency, fromCurrency]);

    return (
        <div>
            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type='text'
                name='amount'
                placeholder='Enter Amount'
            />
            <div className='currency-converter'>
                <div>
                    <select
                        name='fromCurrency'
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}>
                        <option value='USD'>USD</option>
                        <option value='INR'>INR</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </div>
                <p>convert to</p>
                <div>
                    <select
                        name='toCurrency'
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}>
                        <option value='USD'>USD</option>
                        <option value='INR'>INR</option>
                        <option value='EUR'>EUR</option>
                    </select>
                </div>
            </div>
            <div>
                <p>
                    Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
                </p>
                <p>
                    Total: {exchangeRate * amount} {toCurrency}
                </p>
            </div>
        </div>
    );
}
