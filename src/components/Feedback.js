import { useState } from "react"
const Feedback=()=>{
    const [gcounter, gsetCounter]=useState(0)
    const [Ncounter, NsetCounter]=useState(0)
    const [Bcounter, BsetCounter]=useState(0)
    const goodPlus=()=>{
        gsetCounter(gcounter+1)
       }
       const NeutralPlus=()=>{
        NsetCounter(Ncounter+1)
       }
       const BadPlus=()=>{
        BsetCounter(Bcounter+1)
       }
       
    return (
        <>
        <h2>give feedback</h2>
        <button onClick={goodPlus}>good</button>
        <button onClick={NeutralPlus}>neutral</button>
        <button onClick={BadPlus}>bad</button>
        <h2>statistics</h2>
        <p>good{gcounter}</p>
        <p>neutral{Ncounter}</p>
        <p>Bad{Bcounter}</p>
        <h3>all{gcounter+Ncounter+Bcounter}</h3>
        </>
        
    )
}

export default Feedback