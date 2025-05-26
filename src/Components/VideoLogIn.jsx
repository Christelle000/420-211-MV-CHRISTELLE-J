import React from 'react'
import Video2 from '../assets/Video2.mp4'
// import Video1 from '../assets/Video1.mp4'
// import Video3 from '../assets/Video3.mp4'
import Video4 from '../assets/Video4.mp4'
import './VideoLogin.css'
import { useState, useEffect } from 'react'


function VideoLogIn() {
    //Bloc de code pour que la vidéo en arrière plan change dépendemment de l'heure actuelle, les vidéos provienne du jeu The last of us
    const [Video, setVideo] = useState('');
      
       useEffect(() => {
   
           const heurePresent = new Date().getHours('');
        //    if (heurePresent < 12 && heurePresent > 5){
        //        setVideo(Video3)
        //    }
             if (heurePresent >= 12 && heurePresent < 16 ) {
               setVideo(Video4)
             } 
            //  else if (heurePresent >= 16 && heurePresent < 20 ) {
            //     setVideo(Video1)
            //   }
             else { 
                setVideo(Video2)
             }

                }, 
           []);
         
  return ( 
        <div >
        <video 
            className='background-video' 
            src= {Video} 
            muted  
            autoPlay 
            playsInline 
            loop 
        />

        
        </div>
  )
}

export default VideoLogIn
