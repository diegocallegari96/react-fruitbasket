import "./FruitCounter.css"


function FruitsCounter({ fruitType, count, setCount }) {
    console.log(`${fruitType} count: ${count}`)
        const increaseCount = () => {
            setCount(count + 1);
        };

        const decreaseCount = () => {
            if (count > 0) {
                setCount(count - 1);
            }
        };


    return (
        <div className="container">
        <div className="fruitcard">
            <span>{fruitType}</span>
            <button onClick={increaseCount}>+</button>
            <span>{count}</span>
            <button onClick={decreaseCount}>-</button>
        </div>
        </div>
    )
}

export default FruitsCounter;

// import React, { useState, useEffect } from 'react';
//
// function FruitsCounter({fruittype, count, setCount}) {
//     const [fruitCount, setFruitCount] = useState(count);
//
//     const increaseCount = () => {
//         setFruitCount(fruitCount + 1);
//     };
//
//     const decreaseCount = () => {
//         if (fruitCount > 0) {
//             setFruitCount(fruitCount - 1);
//         }
//     };
//
//     useEffect(() => {
//         console.log('count is: ' + fruitCount);
//     }, [fruitCount]);
//
//
//     return (
//         <div>
//             <span>{fruittype}</span>
//             <button onClick={increaseCount}>+</button>
//             <span>{fruitCount}</span>
//             <button onClick={decreaseCount}>-</button>
//         </div>
//     )
// }
//
// export default FruitsCounter;
