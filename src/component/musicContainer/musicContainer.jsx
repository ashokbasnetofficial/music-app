import MusicList from "./musicList/musicList";
import MusicPlay from "./musicPlayer/musicPlay";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './musiccontainer.css';
import React, { useEffect, useState } from "react";
import MusicProgressBar from "../musicProgressBar/musicProgressBar";
//array of object of music 
import song1 from '../../audio_source/1.mp3'
import song2 from '../../audio_source/2.mp3'
import song3 from '../../audio_source/3.mp3'
import song4 from '../../audio_source/4.mp3'
import song5 from '../../audio_source/5.mp3'
import song6 from '../../audio_source/6.mp3'
import song7 from '../../audio_source/7.mp3'
import song8 from '../../audio_source/8.mp3'
import song9 from '../../audio_source/9.mp3'

const tracks = [
  {
    name: "Tal Ko Pani",
    artist: "Nepathya",
    cover: "https://c-cl.cdn.smule.com/smule-gg-uw1-s-4/arr/13/af/89f59cba-124c-4dd2-badc-761908c2d1d0.jpg",
    source: song1,
    favorited: false
  },
  {
    name: "Herda Herdai",
    artist: "Sushant Kc",
    cover: "https://i.ytimg.com/vi/iuGToNdbcCo/maxresdefault.jpg",
    source: song2,
    favorited: true
  },
  {
    name: "Fulthunge Rani",
    artist: "Sujan Chapagain",
    cover: "https://i.ytimg.com/vi/KZNDqHI8AW4/maxresdefault.jpg",
    source:song3,
    favorited: false
  },
  {
    name: "Kun Rangako",
    artist: "Agantuk Kharel",
    cover: "https://i.scdn.co/image/ab67616d0000b27368f6a089deb1534216810ffa",
    source: song4,
    favorited: false
  },
  {
    name: "Ekai Najar Ma",
    artist: "Dipeesh Kishor Bhattarai",
    cover: "https://i.scdn.co/image/ab67616d0000b27382875f4e492fbdeec0a67306",
    source: song5,
    favorited: true
  },
  {
    name: "K Maya Lagchha Ra",
    artist: "Eleena & Nishan Bhattrai",
    cover: "https://i1.sndcdn.com/artworks-e4v1euhqxtCC-0-t500x500.jpg",
    source: song6,
    favorited: false
  },
  {
    name: "Bagne Khola",
    artist: "Sadhana Sargam",
    cover: "https://c.saavncdn.com/752/Bagne-Khola-Ko-Nepali-2010-20220322115035-500x500.jpg",
    source:song7,
    favorited: true
  },
  {
    name: "पानी मिठो मेरो",
    artist: "Sanjeevani",
    cover: "https://i.ytimg.com/vi/CqKVie-3PAk/maxresdefault.jpg",
    source: song8,
    favorited: false
  },
  {
    name: "डाडा घरे साइली ",
    artist: "Swarop raj Acharya & Laxmi Mall",
    cover: "https://i.ytimg.com/vi/v73QW4UbeLg/maxresdefault.jpg",
    source: song9,
    favorited: false
  }];



const player = new Audio(tracks[0].source);
  player.setAttribute('preload','metadata');
//create intial context for suffle and repeat
const userOptions = React.createContext({
  shuffle:false,
  repeat:false
});
//music play state
const MusicContainer = (props) => {
  let [playState,setPlayState]=useState(false); 
  let [index, setIndex] = useState(0);
 let options =React.useContext(userOptions);
  return (
    <>
    <div className="music_section">
      <div className="musiccontainer">

        <Grid container
          direction="row">
          <Grid xs={5}>
            <MusicPlay tracks={tracks} index={index} setIndex={setIndex} player={player} options={options} playState={playState} setPlayState={setPlayState}/>
          </Grid>
          <Grid xs={7}>
            <MusicList tracks={tracks} index={index} setIndex={setIndex} playState={playState} setPlayState={setPlayState}/>
          </Grid>
        </Grid>

      </div>
      <MusicProgressBar  player={player} options={options}  index={index} setIndex={setIndex}/>
     </div>
    </>
  )
}


export default MusicContainer;