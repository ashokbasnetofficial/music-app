import * as React from 'react';
import './musicplay.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon  from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import IconButton from '@mui/material/IconButton';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
export default function MusicPlay() {
  const theme = useTheme();
  return (
    <div className="card_box">
      <Card sx={{minHeight:'60%',minWidth:'60%', margin:'auto'}}>
         <FavoriteIcon/>
        <CardMedia
          sx={{ height:'250px', width:'250px',borderRadius:'50%' ,margin:'auto' }}
          image="https://i.ytimg.com/vi/BcOODsQBhgY/maxresdefault.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sakambari
          </Typography>
         </CardContent>
      </Card>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', pl: 1, pb: 1 }}>
       <IconButton aria-aria-label='shuffle'>
       <ShuffleIcon/>
       </IconButton>
      <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
          <IconButton aria-aria-label='repeat'>
         <RepeatIcon/>
       </IconButton>
        </Box>
      
    </div>
  );
}