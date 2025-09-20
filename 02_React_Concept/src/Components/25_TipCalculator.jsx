import { useState } from 'react';

function TipCalculator() {
    const [billAmount, setBillAmount] = useState(null);
    const [tipPercentage, setTipPercentage] = useState(10);
    const [splitCount, setSplitCount] = useState(1);
    const [tipAmount, setTipAmount] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    function handleCalculateTip() {
        if (!billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
            setTipAmount(null);
            setErrorMsg('Please enter valid values for Bill amount & Tip Percentage');
            return;
        }

        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercentage) / 100;
        const totalAmount = bill + tip;
        const tipAmountPerPerson = tip / splitCount;
        const totalAmountPerPerson = totalAmount / splitCount;

        setTipAmount({
            totalAmount: totalAmount.toFixed(2),
            tipPerPerson: tipAmountPerPerson.toFixed(2),
            totalPerPerson: totalAmountPerPerson.toFixed(2),
        });
        setErrorMsg('');
    }

    return (
        <div>
            <div>
                <label>Bill Amount:</label>
                <input
                    onChange={(event) => setBillAmount(event.target.value)}
                    value={billAmount}
                    type='number'
                />
            </div>
            <div>
                <label>Tip Percentage:</label>
                <input
                    onChange={(event) => setTipPercentage(event.target.value)}
                    value={tipPercentage}
                    type='number'
                />
            </div>
            <div>
                <label>Number Of People:</label>
                <input
                    onChange={(event) => setSplitCount(event.target.value)}
                    value={splitCount}
                    type='number'
                />
            </div>
            <button onClick={handleCalculateTip}>Calculate Tip</button>
            {errorMsg ? <h3 className='error-message'>{errorMsg}</h3> : null}
            {tipAmount ? (
                <div className='tip-result-container'>
                    <h4>Total Amount : {tipAmount.totalAmount}</h4>
                    <h4>Tip Per Person : {tipAmount.tipPerPerson}</h4>
                    <h4>Total Amount Per Person: {tipAmount.totalPerPerson}</h4>
                </div>
            ) : null}
        </div>
    );
}

export default TipCalculator;
