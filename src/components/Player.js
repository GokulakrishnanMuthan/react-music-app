import React,{useState,useEffect, useRef} from 'react'
import PlayerDetail from'./PlayerDetail';
import PlayerControl from './PlayerControl';
 function Player(props) {

     const audioEl=useRef();
     const [isPlaying, setIsPlaying] = useState(false);

     useEffect( ()=>{

        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
     })

     const skipSong= (forwards=true) =>{
        if(forwards){
            props.setCurrentSongIndex( ()=>{
                let temp=props.currentSongIndex;
                temp++;
                if(temp > props.songs.length -1 ){ temp=0}
                return temp;
            })
        }else{
            props.setCurrentSongIndex( ()=>{
                let temp=props.currentSongIndex;
                temp--;
                if(temp < 0 ){ temp=props.songs.length -1}
                return temp;
            })
        }

     }
    return (
        <div className='c-player'>
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetail song={props.songs[props.currentSongIndex]}/>
            <PlayerControl 
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSong={skipSong}
            />
            <p><strong>Next Up : </strong>{props.songs[props.nextSongIndex].title}  </p>
        </div>
    )
}
export default Player;