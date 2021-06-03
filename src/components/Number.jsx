const Number = (props) => {
  const {setNumber, number } = props

  const numberChange = (event) => {
    setNumber(number)
    if(event.shiftKey) setNumber(number - props.count)
    else setNumber(number + props.count)
  }
  return <span>
    <p className={props.numberClass} onClick={(event) => numberChange(event) } >{number}</p><br/>
  </span>
}

export default Number