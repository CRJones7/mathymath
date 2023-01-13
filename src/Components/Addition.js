import React, { useEffect, useState } from 'react';
import LevelSelector from './LevelSelector';



const Addition = ({}) => {
    const [level, setLevel] = useState(null)
    const [firstValue, setFirstValue] = useState(null)
    const [secondValue, setSecondValue] = useState(null)
    const [guess, setGuess] = useState(null)
    useEffect(() => {
        // generating numbers
        getRandomNumber1()
        getRandomNumber2()
    }, [level])

    const levelSetter = (value) => {
        setLevel(value)
    }

   const getRandomNumber1 = () => {
        const max = level && level === 'easy' ? 10 : level && level === 'medium' ? 100 : level && level === 'hard' ? 1000 : level && level === 'hardX' ? 9000 : false
// could refine how num is generated
        let num = max ? Math.floor(Math.random() * max) : 0
        setFirstValue(num)
        return
   }

   const getRandomNumber2 = () => {
    const max = level && level === 'easy' ? 10 : level && level === 'medium' ? 100 : level && level === 'hard' ? 1000 : level && level === 'hardX' ? 9000 : false
// could refine how num is generated
    let num = max && Math.floor(Math.random() * max)
    setSecondValue(num)
    return
}

const handleAnswer = (e) => {
    setGuess(e.target.value)
}


    return (
        <>
        {!level && <LevelSelector mathType={"Addition"} handleLevel={levelSetter}/>}
        {level &&
            <div className='mainContainer'>
                <div className="inGameBtns">
                <span class="material-symbols-outlined">
                restart_alt
                </span>
                <span class="material-symbols-outlined">
                 display_settings
                 </span> 
                </div>
                <div className='mathContainer'>
                    <div className='question'>
                    <h1><span style={{marginLeft: '80px'}}>{firstValue}</span> <br/> {`+ ${secondValue}`}</h1>
                    <hr className='equalsBar'/>
                    <input type="number" className='answerInput' placeholder='??????' onChange={handleAnswer}/>
                    <button className='submitBtn'>Submit</button>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Addition;