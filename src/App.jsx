import React from "react";
import './App.css'
import FruitCard from "./components/FruitCard/FruitCard.jsx";
import FruitsCounter from "./components/FruitCounter/FruitCounter.jsx"


function App() {

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitCard textlable="&#127827; Aardbeijen"

        />
        <FruitsCounter value="bananen"/>
        <FruitCard textlable="&#127820; Bananen"

        />
        <FruitCard textlable="&#127823; Appels"

        />
        <FruitCard textlable="&#129373; Kiwi's"

        />
    </>
  )
}

export default App
