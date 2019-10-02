import React from 'react';
import { Grid,makeStyles  } from '@material-ui/core';
import superagent from 'superagent';
import transformInfo from '../../utils/transformInfo';
import MovieCard from '../../components/MovieCard/MovieCard';




function Category (props){
    var info = transformInfo();
    var plural = `${props.plural}`;
    info.type= `${props.type}`;
    info.action= 'sort_by';
    info.interaction= `${props.interaction}`;
    info.APIKEY = '2c73b0f220a02912d9c2cd39c09588e2';
    info.SERVER = 'https://api.themoviedb.org';
    const classes = useStyles();
    
    if(plural ==='false'){
        info.plural='';
    }else{
        info.plural='s';
    }

  
    
    info.url= `${info.SERVER}/3/${info.type}/movie${info.plural}?${info.action}=${info.interaction}&api_key=${info.APIKEY}`;
    const [movies, setMovies]= React.useState(null);   
    
    
    superagent.get(info.url)
    .then((response) =>{
        
        var list= response.body.results.slice(0,5);
        
        setMovies(list);
        
        
    }) 
    
    
    return(
        
        <Grid  container spacing={12} >
        <div><h1>{props.title}</h1></div>
        
        
        { movies && <div className={classes.container} >
        
        {movies.map((elem) =>{
            return <MovieCard 
            {...elem}
            
            />;
        })}
        
        </div>}
        
        </Grid>
        
        );
        
    }
    
    const useStyles = makeStyles(theme => ({
        
        container:{
            display:'flex',
            flexDirection:'row',
            padding:10,
        }
        
    }));
    export default Category;