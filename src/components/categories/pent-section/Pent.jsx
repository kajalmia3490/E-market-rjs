import { useState } from 'react';
import './Pent.css';
const Pent = ({img, price, rating}) => {
    const [btn, setBtn] = useState('Order to Buy');
    const buttonClick = () => {
        setBtn('Ordered')
    }
    return (
        <div className='pent-section'>
            <img src={img} alt='...' />
            <p> Prce: {price} </p>
            <p> Rating: <img src={rating} alt='...' /> </p>
            <button onClick={buttonClick}> {btn} </button>
        </div>
    );
};

export default Pent;