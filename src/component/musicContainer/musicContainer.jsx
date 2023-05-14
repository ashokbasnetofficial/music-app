import MusicList from "./musicList/musicList";
import MusicPlay from "./musicPlayer/musicPlay";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './musiccontainer.css'
const MusicContainer = () => {
    return (
        <>
          <div className="musiccontainer">
          <Grid container
            direction="row"
             >
                <Grid xs={5}>
                    <MusicPlay />
                </Grid>
                <Grid xs={7}>
                    <MusicList />
                </Grid>
            </Grid>

          </div>
        </>
    )
}
export default MusicContainer;