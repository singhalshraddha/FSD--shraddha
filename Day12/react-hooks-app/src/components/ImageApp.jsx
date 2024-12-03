import React from 'react';
import { useState } from 'react';
import './ImageApp.css';

const ImageApp = () => {
    const [heightx,setHeightx]=useState(100);
    const [width,setWidth]=useState(100);
    const [rotation,setRotation]=useState(0);

  return (
      <div>
        
      <img  src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" style={{width:`${width}px`,height:`${heightx}px`, transform:`rotate(${rotation}deg)`}} />
      <div className='Increase'><button className='Inc' onClick={()=>{
        setWidth(width+10)
      }}>Increase Width</button>
        <button className='Dec' onClick={()=>{setWidth(width-10)}}>Decrease width</button>
        <button className='Inc' onClick={()=>{setHeightx(heightx+10)}}>Increse Height</button>
        <button className='Dec'onClick={()=>{setHeightx(heightx-10)}}>Decrease Height</button>
        <button className='Inc'onClick={()=>{setRotation(rotation+10)}}>Rotate Clockwise</button>
        <button className='Dec'onClick={()=>{setRotation(rotation-10)}}>Rotate Anti-Clockwise</button>
      </div>
    </div>
  )
}
export default ImageApp;