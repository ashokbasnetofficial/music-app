
import './musicplay.css';
import React, { useEffect, useRef, useState } from "react";
import PauseIcon from '@mui/icons-material/Pause';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from '@mui/material/styles';



export default function MusicPlay(props) {
 
  let [msuffle,setMsuffle]=useState(props.options.shuffle);
  let [mrepeat,setMrepeat] =useState(props.options.repeat);
  let [mfavorite,setFavorite] = useState(props.tracks[props.index].favorited);
  useEffect(
      ()=>{ setFavorite(props.tracks[props.index].favorited)}) 
      function shuffle (){
          props.options.shuffle=!props.options.shuffle
          props.options.repeat=false;
          setMsuffle(!msuffle);
          setMrepeat(false);

      }
      function repeat (){
         props.options.repeat=!props.options.repeat
         props.options.shuffle=false;
          setMsuffle(false)
         setMrepeat(!mrepeat)

      }
      function favorite(){
          props.tracks[props.index].favorited=!props.tracks[props.index].favorited;
          setFavorite(props.tracks[props.index].favorited);

      }
   
   let oldindex = useRef(props.index);
   useEffect(() => {
    if (props.playState === true) {
      if (props.player.paused) {
        props.player.play().catch(error => {
          console.error('Failed to play:', error);
        });
      }
    } else {
      if (!props.player.paused) {
        props.player.pause();
      }
    }
  
    if (props.index !== oldindex.current) {
      if (!props.player.paused) {
        props.player.pause();
      }
  
      props.player.src = props.tracks[props.index].source;
      props.player.load();
  
      setTimeout(() => {
        if (props.player.paused) {
          props.player.play().catch(error => {
            console.error('Failed to play:', error);
          });
        }
        props.setPlayState(true);
      }, 500);
  
      oldindex.current = props.index;
    }
  }, [props.index, props.playState, props.player, props.tracks]);
  
  
  const theme = useTheme();

  return (
    <div className="card_box">
      <Card sx={{ minHeight: '60%', minWidth: '50%', margin: 'auto', borderRadius: '1rem' }}>

        {
          mfavorite &&
          <Box sx={{ marginLeft: '90%', marginTop: '2%' }} onClick={favorite}>
          <FavoriteBorderIcon sx={{color:'#000'}}/>
        </Box>
        ||
        <Box sx={{ marginLeft: '90%', marginTop: '2%',cursor:'pointer' }} onClick={favorite}>
          <FavoriteIcon />
        </Box>
        }
        <CardMedia 
          sx={
            props.playState===true?
            { 
              height: '230px', 
              width: '230px', 
              borderRadius: '50%',  
              margin: 'auto',
              
                animation: "spin 2s linear infinite",
                "@keyframes spin": {
                  "0%": {
                    transform: "rotate(360deg)",
                  },
                  "100%": {
                    transform: "rotate(0deg)",
                  },
                },
               }
               :
               { 
                height: '230px', 
                width: '230px', 
                borderRadius: '50%',  
                margin: 'auto'
  
            }}
          image={props.tracks[props.index].cover}
          title="green iguana" 
         
        />
        <CardContent>
          
          <Typography gutterBottom variant="subtitle1" fontWeight='bold' textAlign='center' component="div">
        {props.tracks[props.index].artist } - { props.tracks[props.index].name } 
          </Typography>
         
        </CardContent>
      </Card>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
        {
          msuffle &&
          <IconButton aria-label='suffle' onClick={shuffle}>
            <ShuffleIcon sx={{color:'#000',cursor:'pointer'}}/>
          </IconButton>
          ||
          <IconButton aria-label='shuffle' onClick={shuffle}>
            <ShuffleIcon />
          </IconButton>
        }
        <IconButton aria-label="previous" onClick={x=>props.setIndex(props.index-1<0?8:props.index-1)}>
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        {
         (props.playState===true) ?
          <IconButton aria-label="play/pause" onClick={x=>props.setPlayState(false)}>
          <PauseIcon sx={{ height: 38, width: 38 }} />
        </IconButton>:
        <IconButton aria-label="play/pause"onClick={x=>props.setPlayState(true)}>
          <PlayArrowIcon  sx={{ height: 38, width: 38 }} />
        </IconButton>
        }
        <IconButton aria-label="next" onClick={x=>props.setIndex((props.index+1)%9)} >
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
        
       { mrepeat && 
       <IconButton aria-aria-label='repeat'>
          <RepeatIcon onClick={repeat} sx={{color:'#000',cursor:'pointer'}} />
         
        </IconButton>
        ||
        <IconButton aria-aria-label='repeat'>
          <RepeatIcon onClick={repeat} />
         
        </IconButton>}
      </Box>

    </div>
  );
}