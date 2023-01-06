
const Statistics=(props)=>{
    const {gcounter,Ncounter,Bcounter}=props
    const all=()=>gcounter+Ncounter+Bcounter
       const average=()=>(gcounter-Bcounter)/all()
       const positive=()=>(gcounter/all())*100
    return(
        <>     
        <h2>statistics</h2>
        <p>good{gcounter}</p>
        <p>neutral{Ncounter}</p>
        <p>Bad{Bcounter}</p>
        <h3>all{all()}</h3>
        <p>average{average()}</p>
        <p>positive{positive()}%</p>
        </>
    )
}
export default Statistics