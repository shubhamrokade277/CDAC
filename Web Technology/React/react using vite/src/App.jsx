import React, { useState } from 'react'
import Products from './Products'
 
function App() {
  //useState returns two vals for a= 10 & b= fun to change val of state ie 10
  var [a,b] = useState(10);
  return (
      <div className="w-full h-screen bg-zinc-950 text-white p-5">
        <h1>{a}</h1>
        <button onClick={() => b(++a)} className='px-3 py-1 bg-green-500 rounded-md'>Click</button>
      </div>
  )
}

//ALL this component is importes by the main.jsx file
//& main keeps it in root div directy in the index.html file
export default App