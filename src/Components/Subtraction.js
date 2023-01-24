import React, { useEffect, useState } from 'react';
import LevelSelector from './LevelSelector';
import {yays, wrongs} from "./constants.js"

const Subtraction = () => {
    const [level, setLevel] = useState(null)
    const [firstValue, setFirstValue] = useState(null)
    const [secondValue, setSecondValue] = useState(null)
    const [guess, setGuess] = useState(null)
    const [correctCheckVisible, setCorrectCheckVisible] = useState(false)
    const [wrongXVisible, setWrongXVisble] = useState(false)
    useEffect(() => {
        // generating numbers
        generateQuestion()
    }, [level])

    const levelSetter = (value) => {
        setLevel(value)
    }
    // const yays = ['Nice Work!', 'Good job!', 'Crushed it!', "Correct!", "OooWeee!"]
    // const wrongs = ['Try again!', 'Think again!', 'Woopsies', 'So Close!!' ]
    const generateQuestion = () => {
        getRandomNumber1()
        getRandomNumber2()
    }

    const getRandomNumber1 = () => {
        const max = level && level === 'easy' ? 10 : level && level === 'medium' ? 100 : level && level === 'hard' ? 1000 : level && level === 'hardX' ? 9000 : false
// could refine how num is generated
        let num = max ? Math.floor(Math.random() * max) : 0
        setFirstValue(num)

        if(num !== 0){
            let numTwo = max ? Math.floor(Math.random() * num) : 0
            setSecondValue(numTwo)
        }else{
            let numTwo = max ? Math.floor(Math.random() * max) : 0
            setSecondValue(numTwo)
        }
   }

   const getRandomNumber2 = () => {
//     const max = level && level === 'easy' ? 10 : level && level === 'medium' ? 100 : level && level === 'hard' ? 1000 : level && level === 'hardX' ? 9000 : false
// // could refine how num is generated
//     let num = max && Math.floor(Math.random() * max)
//     setSecondValue(num)
    return
}

const handleAnswerInput = (e) => {
    setGuess(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    let correct = firstValue - secondValue
    let answer = Number(guess)
    console.log(correct, Number(guess) )

    if(correct === answer){
        setCorrectCheckVisible(true)
        setGuess(null)
        generateQuestion()
        setTimeout(() => {
            setCorrectCheckVisible(false)
        }, 2000);
    }else if (correct != answer){
        setWrongXVisble(true)
        setTimeout(() => {
            setWrongXVisble(false)
        }, 2000)
    }
}


    return (
        <>
        {!level && <LevelSelector mathType={"Subtraction"} handleLevel={levelSetter}/>}
        {level &&
            <div className='mainContainer'>
                <div className="inGameBtns">
                <span className="material-symbols-outlined" onClick={() => generateQuestion()}>
                restart_alt
                <span className='tooltip'>New Question</span>
                </span>
               
                <span className="material-symbols-outlined" onClick={() => setLevel(null)}>
                 display_settings
                 <span className='tooltip'>Change Level</span>
                 </span> 
                </div>
                <div className='mathContainer'>
                <div>level: {level}</div>
                    {!correctCheckVisible && !wrongXVisible ?
                    <div className='question'>
                    
                    <h1><span style={{marginLeft: '80px'}}>{firstValue}</span> <br/> {`- ${secondValue}`}</h1>
                    <hr className='equalsBar'/>
                    <input type="number" className='answerInput' placeholder='??????' onChange={handleAnswerInput} value={guess}/>
                    <button className='submitBtn' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                    : correctCheckVisible && !wrongXVisible ?
                    <div className='correct'>
                    <span className="material-symbols-outlined">
                    verified
                    </span>
                    {yays[Math.floor(Math.random() * yays.length)]}
                    </div> 
                    : !correctCheckVisible && wrongXVisible ?
                    <div className='incorrect'>
                    <span className="material-symbols-outlined">
                    cancel
                    </span>
                    {wrongs[Math.floor(Math.random() * wrongs.length)]}
                    </div> : null
                    }
            </div>
        </div>
        }
        </>
    )
}

export default Subtraction;