import { useState } from 'react'
import './App.css'
import Formcomponets from './componet/form/formcomponets'
import Homecomponet from './componet/form/home/homecomponet'

function App() {

  const[user, setUser] =useState([])

  return (
      <div>
         {
          !user.length>0
          ? <Formcomponets setUser={setUser}/>
          :<Homecomponet user={user} setUser={setUser}/>
        } 
        {/* <Formcomponets setUser={setUser}/>
        <Homecomponet user={user} setUser={setUser}/>  */}

      </div>
      )
}

export default App
