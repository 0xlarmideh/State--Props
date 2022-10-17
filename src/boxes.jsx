import React from 'react';

import { useState } from 'react';

export default function Box(props) {
  const [on, setOn] = useState(props.on);
  
  const styles = {
    backgroundColor: on ? "#222222" : "transparent"
  };
  
  function handleClick (){
    setOn(prevClick => !prevClick)
  }

  return (
    <div style={styles} className="box" onClick={handleClick}></div>
  )
}