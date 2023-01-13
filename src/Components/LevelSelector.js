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
                <p className='talk'>{`You selected to practice ${mathType} problems today. Before we start, what level mather are you?`}</p>
                <h1 className='homeTitle levelSelectorTitle'>Choose Difficulty:</h1>
                <div className='levelSelectors'>
                    <div className='level'>
                    <label>Beginner</label>
                    <input type='radio' checked={localLevel === 'easy'} onChange={() => setLocalLevel('easy')}/>
                    </div>
                    <div className='level'>
                    <label>Medium Good</label>
                    <input type='radio' checked={localLevel === 'medium'} onChange={() => setLocalLevel('medium')}/>
                    </div>
                    <div className='level'>
                    <label>Good Good</label>
                    <input type='radio' checked={localLevel === 'hard'} onChange={() => setLocalLevel('hard')}/>
                    </div>
                    <div className='level'>
                    <label>Math Genius</label>
                    <input type='radio' checked={localLevel === 'hardX'} onChange={() => setLocalLevel('hardX')}/>
                    </div>
                </div>
            <button disabled={!localLevel} className='selectionBtn' onClick={() => handleSubmit()}>Start</button>

            </div>
        </div>
    )
}

export default LevelSelector;