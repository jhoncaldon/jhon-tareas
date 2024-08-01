import './App.css'
import {Descripcion } from './components/descripcion/descripci'
import { Imagen } from './components/imagen/image'
import { Nombre } from './components/nombre/name'

function App() {

  return (
    <div className='card'>
      <Imagen/>
      <Nombre name='Will Smith'/>
      <Descripcion  descripcion='' />
    </div>
  )
}
export default App
