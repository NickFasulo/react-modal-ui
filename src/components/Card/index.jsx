import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.data.image} alt={props.data.title} />
      <h3>{props.data.title}</h3>
    </div>
  )
}
