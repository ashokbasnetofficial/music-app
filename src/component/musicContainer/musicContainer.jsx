import MusicList from "./musicList/musicList";
import MusicPlay from "./musicPlayer/musicPlay";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

const MusicContainer = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid xs={5}>
                        <MusicPlay/>
                    </Grid>
                    <Grid xs={7}>
                      <MusicList/>  
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default MusicContainer;