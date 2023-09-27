import "./Review.css";
const Review = ({ name, age, img, comment, rating }) => {
  return <div className="review-section">
    <div className="customer-img">
        <img src={img} />
    </div>
    
    <div className="customer-info">
        <h3> {name} </h3>
        <p> Age: {age} </p>
        <p> Review: {comment} </p>
        <p className="rating"> Rating: <img src={rating} alt="..." /> </p>
    </div>
  </div>;
};

export default Review;
