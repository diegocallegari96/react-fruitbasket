import React, { useState } from 'react';

function FruitsCounter(props) {
    const [fruitCount, setFruitCount] =useState(0);

    const increaseCount = () => {
        setFruitCount(fruitCount + 1);
    };

    const decreaseCount = () => {
        if (fruitCount > 0) {
            setFruitCount(fruitCount - 1);
        }
    };


    return (
        <div>
            <span>{props.fruittype}</span>
            <button onClick={increaseCount}>+</button>
            <span>{fruitCount}</span>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default FruitsCounter;
