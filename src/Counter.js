import React from 'react';
import './Counter.css'

function Counter(props) {
    const [count, setCount] = React.useState(props.initialValue || 0)
    return (
        <button className='Counter' onClick={(e) => {
            e.preventDefault();
            setCount(count + 1)
        }}>
            <span>
                Count: {count}
            </span>
        </button>
    )
}

export default Counter;
