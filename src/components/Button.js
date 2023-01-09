import { useState } from "react"
const Button=()=>{
    const [clicks, setClicks] = useState([]);
    const [rightcounter, rightsetCounter]=useState(0)
    const [leftcounter, leftsetCounter]=useState(0)
    const right=()=>{
        rightsetCounter(rightcounter+1)
        setClicks([...clicks, 'R'])
    }
    const left=()=>{
       leftsetCounter(leftcounter+1)
       setClicks([...clicks, 'L'])
       }

    return (
      <div>
        <h1>Buttons</h1>
        {rightcounter}<button onClick={right}>Right Button</button>
        <button onClick={left}>Left Button</button>{leftcounter}
        <div>
          <p>historys: 
          {/* maps are used for traversing or displaying the
           list of similar objects of a component.  */}
            {clicks.map(click => (
            <span key={click}>{click}</span>
          ))}</p>
        </div>
      </div>
    )
}
export default Button