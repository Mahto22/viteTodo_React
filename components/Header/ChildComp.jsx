import React, { useState } from 'react'

function ChildComp({sendDataToParent}) {
    const [data,setData] = useState('');

    const handleClick = ()=>{
        sendDataToParent(data);
    }
  return (
    <div>
        <input type='text' value={data} onChange={(e) =>setData(e.target.value)} placeholder='Enter Value'></input>
        <button onClick={handleClick}>send data to parent</button>
    </div>
  )
}

export default ChildComp