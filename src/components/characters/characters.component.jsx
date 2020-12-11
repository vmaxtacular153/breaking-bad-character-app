import React from 'react';
import CharacterItem from '../characters/character-item';
import Spinner from '../spinner/spinner.component';


const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
    <section className='cards'>
        {items.map((item) => (
            <CharacterItem 
                key={item.char_id} 
                item={item}
            />
        ))}
    </section>)
}

export default CharacterGrid;

