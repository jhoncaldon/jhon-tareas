import React, { useEffect, useState } from 'react'
import CharacterCard from '../cardComple/characterCard';

const RickAndMortyCard = (props) => {

    const[ name, setName]= useState("");
    const[ image, setImage]= useState("");
    const[ gender, setGender]= useState("");
    const[ status, setStatus]= useState("");


    const rickAndMortyCharacterId = props.id;
 useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
    .then ((response)=>response.json())
    .then((result)=>{
        console.log(result, '==> resultado del EndPoint.')
        setName(result.name)
        setImage(result.image)
        setGender(result.gender)
        setStatus(result.status)
    })
 })
 return(
  <div>
    <CharacterCard
    name={name}
    image={image}
    gender={gender}
    status={status}
    />
  </div>
  )
 }
 export default RickAndMortyCard
  