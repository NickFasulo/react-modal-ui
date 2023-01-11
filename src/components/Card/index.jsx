import './card.css'

export default function Card(props) {
  const {image, title} = props.data
  return (
    <div className='card' onClick={props.onClick}>
      <img src={image ? image : '/placeholder.jpg'} alt={title} />
      <div className='title'>
        <h3>{title}</h3>
      </div>
    </div>
  )
}
