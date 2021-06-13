import {React,useState, useEffect} from 'react';
import Player from './components/Player';

import data from './data.json';

function App() {
const [songs, setSongs] = useState(data)
  const[currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);


  useEffect( ()=>{
    setNextSongIndex( ()=>{
      if( currentSongIndex+1 > songs.length-1){
        return 0;
      }else{
        return currentSongIndex+1;
      }
    })
  },[currentSongIndex])

  return (
    <div className="App">
        <Player 
          songs={songs} 
          nextSongIndex={nextSongIndex}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}

        />
    </div>
  );
}

export default App;
