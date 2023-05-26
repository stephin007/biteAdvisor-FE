import "./card.css";

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card-main'>
        <div className='card-header'>
          <div className='card-header-rest-deets'>
            <div className='card-header-name'>
              <p>Hashery</p>
            </div>
            <div className='card-header-location'>
              <p>📍Connaught Place, Delhi</p>
            </div>
          </div>
          <div className='card-header-usp-mc'>
            <p className='card-header-usp'>Customisable Drink Options</p>
            <p className='card-header-mc'>Dessert</p>
          </div>
        </div>
        <div className='card-body'></div>
        <div className='card-footer'>
          <div className='card-footer-heading'>
            <p>Overall Score</p>
          </div>
          <div className='card-footer-rating'>
            <p>4.5/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
