import { useState } from 'react';
import './Tshirt.css';
const Tshirt = ({img, price, rating}) => {
    const [btn, setBtn] = useState('Order to buy');
    const buttonClick = () => {
        setBtn('Ordered')
    };
    return (
        <div className='tshirt-section'>
            <img src={img} alt='...' />
            <p>
                <p> Price:<span> {price} </span></p>
                <p> Rating: <img src={rating} alt='...'/> </p>
            </p>
            <button onClick={buttonClick}> {btn}  </button>
        </div>
    );
};

export default Tshirt;