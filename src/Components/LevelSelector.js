import React, { useState } from 'react';
import './main.css'

const LevelSelector = ({mathType, handleLevel}) => {
   const  [localLevel, setLocalLevel] = useState(null)

   const handleSubmit = () => {
    handleLevel(localLevel)
   }
    return(
        <div className='mainContainer'>
            <div className='contentContainer'>
                <h1 className='mathType'>{mathType}</h1>
                <h2 className='homeTitle levelSelectorTitle'>Select Difficulty:</h2>
                <div className='levelSelectors'>
                    <div className='level'>
                    <label className='levelLabel'>Beginner</label>
                    <input type='radio' checked={localLevel === 'easy'} onChange={() => setLocalLevel('easy')}/>
                    </div>
                    <div className='level'>
                    <label className='levelLabel'>Medium Good</label>
                    <input type='radio' checked={localLevel === 'medium'} onChange={() => setLocalLevel('medium')}/>
                    </div>
                    <div className='level'>
                    <label className='levelLabel'>Good Good</label>
                    <input type='radio' checked={localLevel === 'hard'} onChange={() => setLocalLevel('hard')}/>
                    </div>
                    <div className='level'>
                    <label className='levelLabel'>Math Genius</label>
                    <input type='radio' checked={localLevel === 'hardX'} onChange={() => setLocalLevel('hardX')}/>
                    </div>
                </div>
            <button disabled={!localLevel} className='selectionBtn levelStart' onClick={() => handleSubmit()}>Start</button>

            </div>
        </div>
    )
}

export default LevelSelector;