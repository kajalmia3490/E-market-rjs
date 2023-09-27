import { useState } from 'react';
import './Shoes.css';
const Shoes = ({img, price, rating}) => {
    const [btn, setBtn] = useState('Order to Buy');
    const buttonClick = () => {
        setBtn('Ordered')
    }
    return (
        <div className='shoes-section'>
            <img src={img} alt='...' />
            <p> Price {price} </p>
            <p>Rating <img src={rating} alt='...' /> </p>
            <button onClick={buttonClick}> {btn} </button>
        </div>
    );
};

export default Shoes;