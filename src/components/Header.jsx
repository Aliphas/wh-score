import React, { useState } from 'react'
import Input from './Input'
import Number from './Number'
import s from './styles/header.module.css'

let Header = (props) => {
  let defaultInputValue = 'Mission'
  const [inputValue, setInputValue] = useState(' ')
  const [round, setNumber] = useState(0)

  return (
    <div className={s.header}>
      <Input inputClass={s.mission} onClick={Input.inputClick} onBlur={Input.inputBlur} defaultInputValue={defaultInputValue} value={inputValue} />
      <Number stringClass={s.round} stringTitle='Round' numberClass={s.roundValue} numberChange={Number.numberChange} count={1} />
    </div>
  )
}

export default Header 