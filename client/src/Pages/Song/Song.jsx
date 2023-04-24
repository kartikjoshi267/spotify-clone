import React, { useContext } from 'react'
import './Song.css'
import context from '../../context/Context';

function Song() {
    const imgURL = "https://preview.redd.it/tjmm-new-song-poster-v0-e47dcw1wc8fa1.png?auto=webp&s=e498999d9d80a93971e05fd6c6428db4b5e6e364";

    const { sample } = useContext(context);

    const onClick = () => {
        console.log(sample())
    }

    return (
        <>
            <div className="song-container">
                <div className='song-glow-cover' style={{ backgroundImage: `url(${imgURL})` }}>
                </div>
                <div style={{ position: 'relative', width: 'fit-content', margin: '40px' }}>
                    <div className='song-glow-bg' style={{
                        backgroundImage: `url(${imgURL})`,
                    }}>
                    </div>
                    <img className='song-img' src={imgURL} onClick={onClick} />
                </div>
            </div>
        </>
    )
}

export default Song