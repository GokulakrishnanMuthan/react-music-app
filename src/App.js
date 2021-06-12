import {React,useState, useEffect} from 'react';
import Player from './components/Player';


function App() {
const [songs, setSongs] = useState([
	{
	 title:"Solo",
	 artist:"Gls",
	 img_src:"./images/image1.jpeg",
	 src:"./music/Aigiri-Nandini.mp3"
	},
  {
    title:"Anbe Sivam",
    artist:"Gls",
    img_src:"./images/image2.jpg",
    src:"./music/Anbe-Sivam.mp3"
   },{
    title:"Uriyadi",
    artist:"Gls",
    img_src:"./images/image3.jpg",
    src:"./music/Agni-Kunjondru.mp3"
   },{
    title:"Ayan",
    artist:"Gls",
    img_src:"./images/image4.jpg",
    src:"./music/OhSupernova.mp3"
   },{
    title:"Billa 2",
    artist:"Gls",
    img_src:"./images/image5.jpg",
    src:"./music/Unakkulle-Mirugam.mp3"
   },{
    title:"Charlie Chaplin",
    artist:"Gls",
    img_src:"./images/image6.jpg",
    src:"./music/Charlie-Chaplin.mp3"
   }
])
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
