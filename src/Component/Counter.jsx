import { useState } from 'react';

function Counter() {
    const [count, setCount ] = useState(0);

    const handleIncr = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecr = () => {
        setCount(prevCount => prevCount - 1);
    }
    

    return(
        <div>
            <h1>Counter App</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncr}>Increment</button>
            <button onClick={handleDecr}>Decrement</button>
        </div>
    );
};

export default Counter;