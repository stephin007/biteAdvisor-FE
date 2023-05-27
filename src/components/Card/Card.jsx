import "./card.css";

const Card = ({ review }) => {
  const BudgetStatus = () => {
    if (review.Budget === "High")
      return <p className='budget-content budget-content-red'>High</p>;
    if (review.Budget === "Medium")
      return <p className='budget-content budget-content-amber'>Medium</p>;
    if (review.Budget === "Low")
      return <p className='budget-content budget-content-green'>Low</p>;
    else return <p className='budget-content'>N/A😕</p>;
  };

  const HasVeg = () => {
    if (review.HasVeg === "Yes")
      return (
        <>
          <i className='bx bxs-leaf hasveg-green'></i>
        </>
      );
    if (review.HasVeg === "No")
      return (
        <>
          <i className='bx bxs-leaf hasveg-red'></i>
        </>
      );
    if (review.HasVeg === "Both")
      return (
        <>
          <i className='bx bxs-leaf hasveg-green'></i>
          <i className='bx bxs-leaf hasveg-red'></i>
        </>
      );
    else return <p className='budget-content'>N/A 😕</p>;
  };
  return (
    <div className='card-container'>
      <div className='card-main'>
        <div className='card-header'>
          <div className='card-header-rest-deets'>
            <div className='card-header-name'>
              <p>{review.Name}</p>
            </div>
            <div className='card-header-location'>
              <p>
                📍{review.Area}, {review.State}
              </p>
            </div>
          </div>
          <div className='card-header-usp-mc'>
            <p className='card-header-usp'>{review.MajorCuisine}</p>
            <p className='card-header-mc'>{review.USP}</p>
          </div>
        </div>
        <div className='card-body'>
          <div className='card-body-section1'>
            <p className='must-try-heading'>Must Try</p>
            <p className='must-try-content'>{review.MustTry}</p>
          </div>
          <div className='card-body-section2'>
            <div className='budget'>
              <p className='budget-heading'>Budget</p>
              {BudgetStatus()}
            </div>
            <div className='options'>
              <p className='options-heading'>Options</p>
              <p className='options-content'>{HasVeg()}</p>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer-heading'>
            <p>Overall Rating</p>
          </div>
          <div className='card-footer-rating'>
            <p>{review.Rating}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
