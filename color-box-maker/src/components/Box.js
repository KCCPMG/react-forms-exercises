import React from 'react';

function Box({width, height, backgroundColor}) {
  return (
    <div className="Box" style={{
      width: width, 
      height: height, 
      backgroundColor: backgroundColor
    }}>

    </div>
  )
}


export default Box;