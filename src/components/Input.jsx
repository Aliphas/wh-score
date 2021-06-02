import { useState } from "react"

let Input = (props) => {
  const [inputValue, setInputValue] = useState(props.defaultInputValue)
  let inputClick = (event) => {
    if(event.target.type !== 'text') setInputValue(<input autoFocus defaultValue={inputValue !== props.defaultInputValue?inputValue : ''}/>)
  }
  let inputBlur = (event) => {
    if(!event.target.value) setInputValue(props.defaultInputValue)
    else setInputValue(event.target.value)
  } 
  return <span>
    <p className={props.stringClass}>{props.stringTitle}&nbsp;</p>
    <div className={props.inputClass} onClick={(event) => inputClick(event)} onBlur={(event) => inputBlur(event)} >{inputValue}</div><br/>
  </span> 
}
export default Input