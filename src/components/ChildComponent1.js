import React from 'react'

const ChildComponent1 = ({setSelectedOPtion}) => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button onClick={()=>setSelectedOPtion('Option 1')}>option 1</button>
    </div>
  )
}

export default ChildComponent1
