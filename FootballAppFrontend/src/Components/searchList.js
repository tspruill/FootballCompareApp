import React from "react";
import PlayerCard from "./playerCard";

const playerListItem = {
    display : 'inline-block',
    listStyleType: 'none',
    padding: '20px'
}
function SearchList({ filteredPersons }) {
  
    const filtered = filteredPersons.map(person => <li style={playerListItem}> <PlayerCard key={person.player_id}  player={person} /></li>); 
    return (
      <div>
          <ul style={{display : 'inline-block'}}>
          {filtered}
          </ul>
       
      </div>
    );
  }

  export default SearchList