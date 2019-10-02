import React from 'react';
import transformInfo from '../../utils/transformInfo';





const Search = (props) =>{
    const [movies]= React.useState(null);
    const handleInput = (event) =>{
        var info = transformInfo();    
        
        let search = event.target.value;
        
        console.log(event.key)
        
        if(search.length <2) return;
        
     
        
    }
    return ( <div onInput={handleInput}>
        <input type="text"/>
        
        { movies && <ul>
            
            {movies.map((elem) =>{
                return <li key={elem.id}>{elem.title}</li>;
            })}
            
            </ul>}
            </div>
            );}
            
            export default Search;