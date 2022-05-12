import { useState } from 'react';

import styled from 'styled-components';
import { TECHNIQUES } from './data'

const characters = ['samurai', 'hunter', 'ronin', 'assassin'];

const Aside = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('hunter');

  const handleClick = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    setSelectedCharacter(value)
  }


  const listCharacters = characters.map((character, index) =>
    <button type='button' onClick={handleClick} value={character} key={index}>{character}</button>
  )

  const findCharacterTechniques = TECHNIQUES.filter((character) => {
    return character.name === selectedCharacter
  })

  console.log(findCharacterTechniques);

  return (
    <aside>
      <AsideHeader>
        Hello: Current character is: {selectedCharacter}
      </AsideHeader>
      <AsideBody>
        <CharacterList>
          {listCharacters}
        </CharacterList>
        <ul>
          {findCharacterTechniques[0].techniques[0].options[0].title}
        </ul>
        <ul>
          {findCharacterTechniques[0].techniques[1].options[0].title}
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

