import React from "react"
import './App.css'
import RickAndMortyCard from "./card/rickAndMortyCard"


function App() {

return (
  <div>
    <h1>PERSONAJES DE RICK AND MORTY</h1>
    <div className="card-page">
    <RickAndMortyCard id = {1} />
    <RickAndMortyCard id = {2} />
    <RickAndMortyCard id ={3}/>
    <RickAndMortyCard id={4}/>
    <RickAndMortyCard id={5}/>
    </div>
  </div>
  )
} 
export default App
