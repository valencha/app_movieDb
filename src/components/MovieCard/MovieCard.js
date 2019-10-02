import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import { Link} from 'react-router-dom';


function MovieCard (props){
    const classes = useStyles({ url: 'https://image.tmdb.org/t/p/w500'+props.backdrop_path });
    
    
    return (
        <Link to={ `/movie/${props.id}`}>
        <Card className={classes.rectangle} >
        
        <CardContent className={classes.content}>
        {console.log(props)}
        <h3 className={classes.title}>{props.title}</h3>
        <p> {props.vote_average} / 10 </p>
        <p> {props.overview} </p>
        </CardContent>
        </Card>
        </Link>
        );
    }
    
    const useStyles = makeStyles(theme => ({
        
        rectangle: {
            width: 250,
            height:200,
            backgroundSize: 'cover',
            backgroundImage: (props) => `url(${props.url})`,
            marginLeft: 20,
            transition: 'all 1s',
            
            
            '&:hover':{ 
                
                backgroundSize:450
                
            },
            
            
            
        },
        
        content:{
            opacity:0,
            transition: 'all 1s',
            
            '&:hover':{ 
                opacity:1,
                backgroundColor: 'rgb(0,0,0,0.4)',
                
                color: 'white',
                
                
            },
        },
        
        
        
    }));
    
    export default MovieCard;