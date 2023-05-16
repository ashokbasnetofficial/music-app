import MusicList from "./musicList/musicList";
import MusicPlay from "./musicPlayer/musicPlay";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import './musiccontainer.css';
import React, { useEffect, useState } from "react";

const tracks = [
  {
    name: "Mekanın Sahibi",
    artist: "Norm Ender",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
    favorited: false
  },
  {
    name: "Everybody Knows",
    artist: "Leonard Cohen",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
    favorited: true
  },
  {
    name: "Extreme Ways",
    artist: "Moby",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
    favorited: false
  },
  {
    name: "Butterflies",
    artist: "Sia",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
    url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
    favorited: false
  },
  {
    name: "The Final Victory",
    artist: "Haggard",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
    url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
    favorited: true
  },
  {
    name: "Genius ft. Sia, Diplo, Labrinth",
    artist: "LSD",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
    url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
    favorited: false
  },
  {
    name: "The Comeback Kid",
    artist: "Lindi Ortega",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
    url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
    favorited: true
  },
  {
    name: "Overdose",
    artist: "Grandson",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
    url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
    favorited: false
  },
  {
    name: "Rag'n'Bone Man",
    artist: "Human",
    cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
    favorited: false
  }];



const player = new Audio(tracks[0].source);
  player.setAttribute('preload','metadata');

const MusicContainer = (props) => {
  let [index, setIndex] = useState(0)
  return (
    <>
      <div className="musiccontainer">

        <Grid container
          direction="row">
          <Grid xs={5}>
            <MusicPlay tracks={tracks} index={index} setIndex={setIndex} player={player} />
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