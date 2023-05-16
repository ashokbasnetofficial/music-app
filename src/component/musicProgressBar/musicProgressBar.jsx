
import './musicprogress.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { IconButton } from '@mui/material';
const MusicProgressBar = () => {
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
                  2:30
               </div>
               <div className="progressbar">
                  <div className="progress_onbar">
                     <div className="progress_circle">

                     </div>
                  </div>

               </div>
               <div className="totalduration">
                  8:30
               </div>
               <div className="sound_icon">
                  <IconButton>
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