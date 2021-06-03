import { useState } from "react"

const Input = (props) => {

  const {defaultValue, className} = props

  const [isInputActive, setInputACtive ] = useState(false)
  const [value, setValue] = useState('')

  const handleToggle = () => setInputACtive(!isInputActive)
  const handleChange = (event) => setValue(event.target.value)

  return <div style = {{display: 'inline-block'}} >
    {isInputActive ? 
      <input 
        autoFocus 
        spellCheck='false' 
        onBlur={handleToggle}
        onChange ={handleChange}
        value={value} />
        : <span className={className} onClick={handleToggle}>{value || defaultValue}</span>
    }
  </div> 
}
export default Input