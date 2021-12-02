import React, { useState, useEffect } from 'react'
import Card from './Card';

const Character = () => {
    const [character,setCharacter] = useState([]);

 useEffect(() =>{
    getCharacters();
 },[])

 const getCharacters =  async () => {
     const url = 'https://rickandmortyapi.com/api/character/';
     const res = await fetch(url);
     const data = await res.json();
     const {results} = data;
     console.log(results);

     const characters = results.map(char => {
         return{
             id: char.id,
             name: char.name,
             image: char.image,
             status: char.status,
             gender: char.gender,
             origin: char.origin.name
         }
     })
     setCharacter(characters);
 }
  return (
    <div>
      <Card character={character} />

    </div>
  )
}

export default Character
