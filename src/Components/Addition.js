import React, { useState } from 'react';
import LevelSelector from './LevelSelector';



const Addition = ({}) => {
    const [level, setLevel] = useState(null)

    const levelSetter = (value) => {
        setLevel(value)
    }

   const getRandomNumber1 = () => {
        const max = level && level === 'easy' ? 10 : level && level === 'medium' ? 100 : level && level === 'hard' ? 1000 : level && level === 'hardX' ? 9000 : false
// could refine how num is generated
       let num = max ? Math.floor(Math.random() * max) : 0

       return num
   }



    return (
        <>
        {!level && <LevelSelector mathType={"Addition"} handleLevel={levelSetter}/>}
        {level &&
            <div className='mainContainer'>
                <div className='mathContainer'>
                    <div className='question'>
                    <h1><span style={{marginLeft: '80px'}}>{getRandomNumber1()}</span> <br/> {`+ ${getRandomNumber1()}`}</h1>
                    <hr className='equalsBar'/>
                    <input type="number" className='answerInput' placeholder='12345'/>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Addition;