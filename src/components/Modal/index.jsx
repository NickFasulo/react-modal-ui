import parse from 'html-react-parser'
import './modal.css'

export default function Modal(props) {
  const { image, title, summary } = props.data

  return (
    <div className='modal'>
      <h3>{title}</h3>
      <button onClick={props.onClose}>Close</button>
      <p>{parse(summary)}</p>
    </div>
  )
}
