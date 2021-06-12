import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'

function PlayerControl(props) {
    return (
        <div className='c-player-contorls'>
            <button className="skip-btn" onClick={ ()=> props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="play-btn" onClick={ ()=>props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause: faPlay }/>
            </button>
            
            <button className="skip-btn" onClick={ ()=> props.skipSong()}>
            <FontAwesomeIcon icon={faForward}/>
            </button>
        </div>
    )
}

export default PlayerControl
