import React, {useState, useRef, useEffect} from 'react'

const UseRef = () => {
    const [name, setName] = useState(0);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })
  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
      <h1>name : {name}</h1>
      <h1>Count : {count.current}</h1>
      <h2>Another Count : {count.current}</h2>

    </div>
  )
}

export default UseRef
