import React from 'react'

const Homecomponet = (props) => {
 
  const handleLogOut=()=>{
    props.setUser([])
  }
    return (
    <div>
        <h1> BIENVENIDO</h1>
        <h2>{props.user}</h2>
        <button onClick={handleLogOut}>salir</button>
    </div>
  )
}
export default Homecomponet