import React, { useState } from 'react'
import ChildComp from './ChildComp'

export const ParentComp = () => {
    const [dataFromChild,setDataFromChild] = useState('');

    const handleDataFromChild = (data) =>{
        setDataFromChild(data);
    }
  return (
    <div>
        <h2>Data from Child: {dataFromChild}</h2>
        <ChildComp sendDataToParent = {handleDataFromChild} />
    </div>
  )
}
