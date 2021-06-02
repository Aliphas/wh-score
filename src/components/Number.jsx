import { useState } from "react"

let Number = (props) => {

  const [number, setNumber] = useState(0)

  let numberChange = (event) => {
    setNumber(props.number)
    if(event.shiftKey) setNumber(number - props.count)
    else setNumber(number + props.count)
  }
  return <span>
    <p className={props.stringClass}>{props.stringTitle}: &nbsp;</p>
    <p className={props.numberClass} onClick={(event) => numberChange(event) } >{number}</p><br/>
  </span>
}

export default Number