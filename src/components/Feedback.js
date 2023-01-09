import { useState } from "react"
import Statistics from "./Statistics"
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
< Statistics gcounter={gcounter} Ncounter={Ncounter} Bcounter={Bcounter}/>

        </>
        
    )
}


export default Feedback
