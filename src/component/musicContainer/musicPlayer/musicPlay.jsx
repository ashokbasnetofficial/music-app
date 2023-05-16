
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

const userOptions = React.createContext({
    shuffle:false,
    repeat:false
});

export default function MusicPlay(props) {
  let options =React.useContext(userOptions);
  let [msuffle,setMsuffle]=useState(options.shuffle);
  let [mrepeat,setMrepeat] =useState(options.repeat);
  let [mfavorite,setFavorite] = useState(props.tracks[0].favorited);
  useEffect(
      ()=>{ setFavorite(props.tracks[0].favorited)}) 
      function shuffle (){
          options.shuffle=!options.shuffle
          options.repeat=false;
          setMsuffle(!msuffle);
          setMrepeat(false);

      }
      function repeat (){
         options.repeat=!options.repeat
         options.shuffle=false;
          setMsuffle(false)
         setMrepeat(!mrepeat)

      }
      function favorite(){
          props.tracks[props.index].favorited=!props.tracks[props.index].favorited;
          setFavorite(props.tracks[props.index].favorited);

      }
   let [playState,setPlayState]=useState(false); 
   const oldindex = useRef(props.index);
   useEffect(()=>{
    if (playState===true){
       props.player.play()
    }
     else {
      props.player.pause()
    }
      // if(props.index!=oldindex){
      //   props.player.pause();
      //   props.player.src=props.tracks[props.index].source;
      //   props.player.load();
      //   props.player.play()
      //   setPlayState(true);
      //   oldindex.current=props.index;
      // }
   })
  
  const theme = useTheme();
  return (
    <div className="card_box">
      <Card sx={{ minHeight: '60%', minWidth: '50%', margin: 'auto', borderRadius: '1rem' }}>

        {
          mfavorite &&
          <Box sx={{ marginLeft: '90%', marginTop: '2%' }} onClick={favorite}>
          <FavoriteIcon sx={{color:'#000'}}/>
        </Box>
        ||
        <Box sx={{ marginLeft: '90%', marginTop: '2%',cursor:'pointer' }} onClick={favorite}>
          <FavoriteIcon />
        </Box>
        }
        <CardMedia 
          sx={{ height: '250px', width: '250px', borderRadius: '50%', margin: 'auto' }}
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
        <IconButton aria-label="previous" onClick={x=>props.index-1<0?8:props.index-1}>
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        {
         (playState===true) ?
          <IconButton aria-label="play/pause" onClick={x=>setPlayState(false)}>
          <PauseIcon sx={{ height: 38, width: 38 }} />
        </IconButton>:
        <IconButton aria-label="play/pause"onClick={x=>setPlayState(true)}>
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