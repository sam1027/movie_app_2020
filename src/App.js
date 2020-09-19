import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    taste: "50",
    rating: 5
  },
  {
    id: 2,
    name: "potato",
    taste: "10",
    rating: 4.7
  },
  {
    id: 3,
    name: "apple",
    taste: "90",
    rating: 4.1
  },
  {
    id: 4,
    name: "banana",
    taste: "100",
    rating: 4.3
  }
];

Food.prototype = {
  name: PropTypes.string.isRequired,
  taste: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function Food({name, taste, rating}){
  return (
    <div>
      <h3>I likn {name}. Taste Score is {taste}.</h3>
      <h5>{rating}/5.0</h5>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} taste={dish.taste} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;