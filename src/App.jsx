import { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Banner from "./components/banner/Banner";
import { reviews } from "./components/fake-data/Customers";
import Review from "./components/banner/Review";
import Categories from "./components/categories/Categories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />

        <Banner />

        <h3 className="review-title">Customers Review</h3>
        <div className="reviews">
          {reviews.map(({name, img, age, comment, rating}, ind) => 
          <Review {...{name, img, age, comment, rating, key: ind} }  />
          )}
        </div>
        <hr />

        <Categories />

        
      </div>
    </>
  );
}

export default App;
