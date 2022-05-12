import { useState } from 'react';

import styled from 'styled-components';
import { TECHNIQUES } from './data'

const Aside = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('hunter');

  const handleClick = (event) => {
    // event.preventDefault()
    const { value } = event.currentTarget;
    setSelectedCharacter(value)
  }

  const listCharacters = TECHNIQUES.map((character, index) =>
    <button type='button' onClick={handleClick} value={character.name} key={index}>{character.name}</button>
  )

  const characterTechniques = TECHNIQUES.map((character, index) =>
    <li key={index}>{character.techniques[0].options[0].title}</li>
  )



  return (
    <aside>
      <AsideHeader>
        Hello: Current character is: {character}
      </AsideHeader>
      <AsideBody>
        <CharacterList>
          {listCharacters}
        </CharacterList>
        <ul>
          {characterTechniques}
        </ul>
      </AsideBody>

    </aside>
  )
}


const AsideHeader = styled.div`
  background-color: maroon;
  color: white;
`;

const AsideBody = styled.section`
  background: #350d0b;
  color: white;
`;

const CharacterList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
`

export { Aside }

