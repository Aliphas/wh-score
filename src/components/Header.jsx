import React, { useState } from 'react'
import Input from './Input'
import Number from './Number'
import s from './styles/header.module.css'


const Header = (props) => {
  const inputValue = 'Mission'
  const [round, setNumber] = useState(0)

  return (
    <div className={s.header}>
      <Input defaultValue={inputValue} className={s.mission}/><br/>
      <div className={s.round}>Round : &nbsp;</div><Number numberClass={s.roundValue} numberChange={Number.numberChange} count={1} setNumber={setNumber} number={round}/>
    </div>
  )
}

export default Header 