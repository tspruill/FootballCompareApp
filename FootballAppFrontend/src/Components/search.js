import React, {useState} from "react";
import SearchList from "./searchList";

function Search() {

    const [searchField, setSearchField] = useState("");
    const [filteredPersons , setfilteredPersons] = useState([]);
   
  //var filteredPersons = [];
    const handleChange = e => {
      setSearchField(e.target.value);
    };
    function searchItem(){
        fetch('http://localhost:3001/player/'+ encodeURIComponent(searchField))
        .then(response => {
          
          return response.json();
        })
        .then(data => {
          
            setfilteredPersons(data)
          
        });
    }
  
    function searchList() {
      return (
       
          <SearchList filteredPersons={filteredPersons} />
      
      );
    }
  
    return (
      <section className="garamond">
        <div className="navy georgia ma0 grow">
          <h2 className="f2">Search your course</h2>
        </div>
        <div className="pa2">
          <input 
            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
            type = "search" 
            placeholder = "Search People" 
            onChange = {handleChange}

          />
          <button type="submit" onClick={searchItem}> Search</button>
        </div>
        {searchList()}
      </section>
    );
  }
  export default Search