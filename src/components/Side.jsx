import React, { useState } from 'react'
import Input from './Input'
import Number from './Number'
import s from './styles/side.module.css'


let Side = (props) => {
  let defaultInputValue = 'Name'
  const [inputValue, setInputValue] = useState(defaultInputValue)

  const [cp, setCountCP] = useState(0)
  const [pr, setCountPR] = useState(0)
  const [sec1, setCount1] = useState(0)
  const [sec2, setCount2] = useState(0)
  const [sec3, setCount3] = useState(0)
  const [vp, setVp] = useState(0)
 


  return (
    <div className={s.side} >{vp}
      <Input stringClass={s.faction} stringTitle={'Faction: '} inputClass={s.input} onClick={Input.inputClick} onBlur={Input.inputBlur} defaultInputValue={defaultInputValue} value={Input.inputValue} />
      <Number stringClass={s.string} stringTitle='CP' numberClass={s.stringValue} numberChange={Number.numberChange} count={1} objCount={setCountCP} num={cp}/>

      <Number stringClass={s.string} stringTitle='Primary' numberClass={s.stringValue} numberChange={Number.numberChange} count={5} number={pr}/>
      <Number stringClass={s.string} stringTitle='Sec1' numberClass={s.stringValue} numberChange={Number.numberChange} count={1} number={sec1}/>
      <Number stringClass={s.string} stringTitle='Sec2' numberClass={s.stringValue} numberChange={Number.numberChange} count={1} number={sec2}/>
      <Number stringClass={s.string} stringTitle='Sec3' numberClass={s.stringValue} numberChange={Number.numberChange} count={1} number={sec3}/>
    </div>
  )
}

export default Side