import "./Categories.css";
import Tshirt from "./t-shirt-section/Tshirt";
import { tShirt} from "../fake-data/Tshirt";
import { pent } from "../fake-data/Pent";
import { shoes } from "../fake-data/Shoes";
import Pent from "./pent-section/Pent";
import Shoes from "./shoes-section/Shoes";
const Categories = () => {
  return (
    <div className="categories-section">
        <h2>T-Shirt</h2>
      <div className="tshirt-comp">
        {tShirt.map(({ img, price, rating }, ind) => (
          <Tshirt {...{ img, price, rating }} key={ind} />
        ))}
      </div>
        
      <h2>Pent</h2>
      <div className="pent-comp">
            {pent.map(({img, price, rating}, ind) => <Pent {...{img, price, rating}} key={ind} />)}
      </div>

      <h2>Shoes</h2>
      <div className="shoes-comp">
            {shoes.map(({img, price, rating}, ind) => <Shoes {...{img, price, rating}} key={ind} />)}
      </div>
    </div>
  );
};

export default Categories;
