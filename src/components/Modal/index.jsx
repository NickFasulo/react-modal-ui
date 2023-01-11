import './modal.css'

export default function Modal(props) {
  const { image, title } = props.data
  return (
    <div className='modal'>{title}</div>
  )
}
