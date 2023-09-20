import React, { useState } from 'react';
import './App.css'
import FruitsCounter from "./components/FruitCounter/FruitCounter.jsx"


function App() {

    const [bananasCount, setBananasCount] = useState(0);
    const [strawberriesCount, setStrawberriesCount] = useState(0);
    const [applesCount, setApplesCount] = useState(0);
    const [kiwisCount, setKiwisCount] = useState(0);

    const resetCounts = () => {
        setBananasCount(0);
        setStrawberriesCount(0);
        setApplesCount(0);
        setKiwisCount(0);
        console.log("hoi")
    };


  return (
    <div>
        <h1>Fruitmand bezorgservice</h1>
        <FruitsCounter fruittype="&#127827; Aardbeijen"
                       count={strawberriesCount}
                       setCount={setStrawberriesCount}
                       className="fruitcard"
                       onReset={resetCounts}

        />
        <FruitsCounter fruittype="&#127820; Bananen"
                       count={bananasCount}
                       setCount={setBananasCount}
                       className="fruitcard"
                       onReset={resetCounts}
        />
        <FruitsCounter fruittype="&#127823; Appels"
                       count={applesCount}
                       setCount={setApplesCount}
                       className="fruitcard"
                       onReset={resetCounts}
        />
        <FruitsCounter fruittype="&#129373; Kiwi's"
                       count={kiwisCount}
                       setCount={setKiwisCount}
                       className="fruitcard"
                       onReset={resetCounts}
        />
        <button onClick={resetCounts}>Reset</button>
    </div>

  );
}

export default App;
