import './Nota.css'

export function Nota (props) {
  const color = props.color
  const text = props.text

  return (
    <div id='note' className={color}>
      <p>{text}</p>
    </div>
  )
}
