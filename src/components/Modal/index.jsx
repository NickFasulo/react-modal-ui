import './modal.css'

export default function Modal(props) {
  const { image, title } = props.data

  return (
    <div className='modal'>
      <h3>{title}</h3>
      <button onClick={props.onClose}>Close</button>
    </div>
  )
}
