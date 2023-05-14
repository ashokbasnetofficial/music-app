import {IconButton, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const MusicList = () => {

  return (
    <>
      <Container mxWidth="sm">
        <Grid container spacing={0}>
          <Grid xs={12} >
            <Typography variant="body1" component="h2">
              Sakambari
            </Typography>


          </Grid>
          <Grid xs={12} sx={{display:'flex'}}>
            <Typography variant="body1" component="h2">
              Prakash Saput
            </Typography>
            <Typography variant="body1" component="h2" sx={{mx:2}}>
              . 2023
            </Typography>
            <Typography variant="body1" component="h2" sx={{mx:2}}>
              . 20 Songs
            </Typography>
           
          </Grid>
          <Grid xs={12}  sx={
            {backgroundColor:'black',
            borderRadius:'5px',
            p:2,
            m:2,
            color:'white'
            }
            }>
          <Box>
          <Typography variant="body1" component="h2" 
            sx={{mx:2 ,display:'flex',justifyContent:'start'}}>
            <PlayArrowIcon />  Sakambari(Fulmaya) -prakash saput
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12}  sx={
            {
            p:2,
        
            color:'black'
            }
            }>
          <Box>
          <Typography variant="body1" component="h2" 
            sx={{mx:2 ,display:'flex',justifyContent:'start'}}>
              2. Timi Lai Herne Bani Paryo - Anu Chaudhary 
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12}  sx={
            {
            p:2,
           
            color:'black'
            }
            }>
          <Box>
          <Typography variant="body1" component="h2" 
            sx={{mx:2 ,display:'flex',justifyContent:'start'}}>
              2. Timi Lai Herne Bani Paryo - Anu Chaudhary 
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12}  sx={
            {
            p:2,
          
            color:'black'
            }
            }>
          <Box>
          <Typography variant="body1" component="h2" 
            sx={{mx:2 ,display:'flex',justifyContent:'start'}}>
              3. Bagai chama Najau timi -Udit Narayan Jha
            </Typography>
            </Box>
          </Grid>
          <Grid xs={12}  sx={
            {
            p:2,
           
            color:'black'
            }
            }>
          <Box>
          <Typography variant="body1" component="h2" 
            sx={{mx:2 ,display:'flex',justifyContent:'start'}}>
              4. Pani Pani Banyeu - Eleena Chauhan
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default MusicList;