import React from 'react';
import './App.css';
import { useState } from 'react';
import Box from "./boxes.jsx";
import Data from "./box.jsx"
// import { useState } from 'react';

export default function App() {
    const boxData = Data
    const [squares, setSquares] = useState(boxData);
    

  
  const boxMapped = squares.map(item => {
    return <Box key={item.id} on={item.on} />
  })
  
  
  return (
    <main><>{boxMapped}</></main>
  )
}
