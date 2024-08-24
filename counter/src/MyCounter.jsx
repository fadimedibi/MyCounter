import React, { useState } from 'react';
import './MyCounter.css';

function MyCounter() {

    //initialze the begining state of the counter
    const [count, setCount] = useState(0);

    //function for increasing
    const increment = () => setCount(count + 1);

    //function for decreasing
    const decrement = () => setCount(count - 1);

    //function for resetting
    const reset = () => setCount(0);

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '20px'
        }}>

            <h1>My Counter</h1>

            <p style={{ fontSize: '2em' }}>{count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>

        </div>

    );

}
export default MyCounter;
