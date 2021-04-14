function Card(props) {
  return (
    <div className="place">
        <div className="place__photo" onClick={() => {props.onCardClick(props.card);}}style={{ backgroundImage: `url(${props.card.link})` }} alt={props.card.name}/>
        <div className="place__description">
          <h3 className='place__heading'>{props.card.name}</h3>
          <div className ='place__like-container'>
            <button className='place__like button' type="button"></button>
            <span className='place__like-counter'>{props.card.likes.length}</span>
          </div>
        </div>
    </div>

  )}

  export default Card;