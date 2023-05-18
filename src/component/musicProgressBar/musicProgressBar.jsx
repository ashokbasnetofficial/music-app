
import './musicprogress.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const MusicProgressBar = (props) => {
   let [currentLength, setCurrentLength]=useState(0);
   let [length,setLength]=useState(0);
   let [volume,setVolume]=useState(1);
   const progressbar = document.querySelector('.progress_onbar');
  
   const changeProgress=(e)=>{
    let offset = e.target.getBoundingClientRect().left;
   let newOffset =e.clientX
   const elmentWidth = document.querySelector('.progressbar').offsetWidth;
    console.log(newOffset)
    let newWidth = newOffset-offset;
    progressbar.style.width=`${newWidth}px`;
    let secPerPixel = length/elmentWidth;
    
   props.player.currentTime = secPerPixel*newWidth;

   }
   setInterval(()=>{
      setLength(Math.ceil(props.player.duration))
      setCurrentLength(Math.ceil(props.player.currentTime))
      const elmentWidth = document.querySelector('.progressbar').offsetWidth;
      const secperPixel = elmentWidth/props.player.duration;
      let newWidth = (props.player.currentTime)*secperPixel;
      document.querySelector('.progress_onbar').style.width=`${newWidth}px`;
      
      if(props.player.currentTime===props.player.duration){
         if(props.options.shuffle===true){
            props.setIndex((parseInt(Math.random()*1000))%9);

         }
         else if(props.options.repeat===true){
            props.player.play();

         }
         else{
            props.setIndex((props.index+1)%9);
         }
      }
   
   },
   1000
   )
const changeVolume=(e)=>{
 console.log(1)
}

function formatTime(s){
		return Number.isNaN(s) ? '0:00' : (s-(s%=60))/60+(9<s?':':':0')+s
	}
   return (

      <>
         <div className="musicprogress">
            <div className="phone_storage">
               <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
               <div className="text">
                  <p className='phone'>iphone</p>
                  <p className='sorage'>64GB</p>
               </div>
               <div className="icon">
                  <ArrowDropUpIcon />
               </div>
            </div>
            <div className="progress">
               <div className="run_duration">
                   {formatTime(currentLength)}
               </div>
               <div className="progressbar" onClick={(e)=>changeProgress(e)}>
                  <div className="progress_onbar">
                     <div className="progress_circle">

                     </div>
                  </div>

               </div>
               <div className="totalduration">
                 {formatTime(length)}
               </div>
               <div className="sound_icon">
                  <IconButton onClick={(e)=>changeVolume(props.player)}>
                     <VolumeUpIcon />
                  </IconButton>
                  <IconButton>
                     <PlaylistPlayIcon />
                  </IconButton>
               </div>
            </div>
         </div>
      </>
   )
}
export default MusicProgressBar;