import parse from 'html-react-parser'
import './modal.css'

export default function Modal(props) {
  const { image, title, summary, instructions } = props.data

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={props.onClose}>Close</button>
        <div className='modal-summary'>
          <div>
            <h3>{title}</h3>
            <img src={image ? image : '/placeholder.jpg'} alt={title} />
          </div>
          <span>{parse(summary)}</span>
        </div>
        <p className='instructions'>{parse(instructions)}</p>
      </div>
    </div>
  )
}
