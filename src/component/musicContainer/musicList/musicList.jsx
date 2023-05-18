import { IconButton, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './musiclist.css';
const MusicList = (props) => {
const nextSong =(e)=>{
props.setIndex(e);
props.setPlayState(true);
}
  return (
    <>
      <Container mxWidth="sm" >
        <Grid container spacing={0}>
          <Grid xs={12} >
            <Typography variant="h5" fontWeight="bold" component="h2">
              {props.tracks[props.index].name}
            </Typography>


          </Grid>
          <Grid xs={12} sx={{ display: 'flex' }}>
            <Typography variant="body1" fontWeight="bold" component="h2">
              {props.index+1}. {props.tracks[props.index].artist}
            </Typography>
            <Typography variant="body1" fontWeight="bold" component="h2" sx={{ mx: 2 }}>
              . 2023
            </Typography>
            <Typography variant="body1" fontWeight="bold" component="h2" sx={{ mx: 2 }}>
              . {props.tracks.length} Songs
            </Typography>

          </Grid>
          {
            props.tracks.map((song, index) => {
              return (
                <Grid
                 
                  xs={12}
                  sx={
                    props.index === index
                      ? {
                        backgroundColor: 'black',
                        borderRadius: '5px',
                        display:'flex',
                        pr:1,
                        py:1,
                        color: 'white',
                      }
                      : {
                        my:1,
                        color: 'black',
                       
                      }
                  }
                >
                  <Box>
                    <Typography

                     onClick={(e)=>nextSong(index)}
                      variant="body1"
                      component="h2"
                      sx={{ mx: 1, display: 'flex', justifyContent: 'start',cursor:'pointer'}}
                    >
                     {
                    ( props.playState===true && props.index===index) && 
                       <PlayArrowIcon/>
                       ||
                       ( props.playState===false && props.index===index) && 
                       <PauseIcon/>
                     }
                     {index+1}. {song.artist}-{song.name}
                    </Typography>
                  </Box>
                   
                </Grid>
              );
            })
          }
        </Grid>
      </Container>
    </>
  )
}
export default MusicList;