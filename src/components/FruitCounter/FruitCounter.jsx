import React, { useState } from 'react';

function FruitsCounter(props) {
    const [fruitCount, setFruitCount] = useState(props.count, props.setCount);

    console.log(`${props.fruittype} has a count of: ${fruitCount}`);

    const increaseCount = () => {
        setFruitCount(fruitCount + 1);
    };

    const decreaseCount = () => {
        if (fruitCount > 0) {
            setFruitCount(fruitCount - 1);
        }
    };


    return (
        <div className="fruitcard">
            <span>{props.fruittype}</span>
            <button onClick={increaseCount}>+</button>
            <span>{fruitCount}</span>
            <button onClick={decreaseCount}>-</button>
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
