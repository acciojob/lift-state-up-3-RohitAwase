import React from 'react'

const ChildComponent2 = ({setSelectedOPtion}) => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button onClick={()=>setSelectedOPtion('Option 2')}>option 2</button>
    </div>
  )
}

export default ChildComponent2
