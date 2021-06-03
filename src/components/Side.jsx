import React, { useState } from 'react'
import Input from './Input'
import Number from './Number'
import s from './styles/side.module.css'


const Side = (props) => {
  const inputValue = 'Name'
  const [cp, setCountCP] = useState(0)
  const [pr, setCountPR] = useState(0)
  const [sec1, setCount1] = useState(0)
  const [sec2, setCount2] = useState(0)
  const [sec3, setCount3] = useState(0)
  const vp = pr + sec1 + sec2 + sec3

  return (
    <div className={s.side} >
      <p className={s.faction}>Faction: &nbsp;</p><Input className={s.factionValue} defaultValue={inputValue}/><br/>
      <p className={s.string}>CP: &nbsp;</p>
      <Number numberClass={s.stringValue} numberChange={Number.numberChange} count={1} setNumber={setCountCP} number={cp}/>
      <p className={s.string}>VP: &nbsp;</p>{vp}<br/>
      <p className={s.string}>PR: &nbsp;</p>
      <Number numberClass={s.stringValue} numberChange={Number.numberChange} count={5} setNumber={setCountPR} number={pr}/>
      <Input className={s.string} defaultValue='Sec1'/>: &nbsp;
      <Number numberClass={s.stringValue} numberChange={Number.numberChange} count={1} setNumber={setCount1} number={sec1}/>
      <Input className={s.string} defaultValue='Sec2'/>: &nbsp;
      <Number numberClass={s.stringValue} numberChange={Number.numberChange} count={1} setNumber={setCount2} number={sec2}/>
      <Input className={s.string} defaultValue='Sec3'/>: &nbsp;
      <Number numberClass={s.stringValue} numberChange={Number.numberChange} count={1} setNumber={setCount3} number={sec3}/>
    </div>
  )
}

export default Side