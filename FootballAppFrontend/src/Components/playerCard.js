import React from'react';
const PlayerCard = props => {
    return(
    <div style={{border: '2px black solid', padding: '16px'}}>
        <h2> {props.player.name}</h2>
        
            <p> {props.player.current_team ? props.player.current_team : "Retired or FA" }</p><br/>
            <p>{props.player.position}</p><br/>
            <p>{props.player.draft_year ? props.player.draft_year : "Undrafted"}</p><br/>
            <p>{props.player.draft_team ? props.player.draft_team : "Undrafted"}</p><br/>
            <p>{props.player.college}</p><br/>
           
            
            
    </div>
       
   
    );
}

export default PlayerCard