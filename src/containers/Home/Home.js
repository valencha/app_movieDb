import React from 'react';
import Category from '../Category/Category';






function Home(){
    return( <ul>
        <li> <Category
        title="Trending Now"
        interaction='popularity.desc'
        type='discover'
        plural= 'false'
        /> </li>
        
        <li> <Category
        title="Most watched in horror"   
        interaction= 'popularity.desc'    
        type= 'genre/27'
        plural= 'true'
        /> </li>
        
        <li> <Category
        title="Sci-Fi greats"   
        interaction= 'popularity.desc'    
        type= 'genre/878'
        plural= 'true'
        /> </li>
        
        <li> <Category
        title="Comedy magic"   
        interaction= 'popularity.desc'    
        type= 'genre/35'
        plural= 'true'
        /> </li>
        
        </ul>
        );
        
    }
    
    
    export default Home;