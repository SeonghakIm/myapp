//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함

import PropTypes from "prop-types";



const foodILike = [
  {
    id:1,
    name : "goguma",
    image : "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating : 2.5
  },
  {
    id:2,
    name : "gamza",
    image : "http://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg",
    rating : 4.6
  },
  {
    id:3,
    name : "oksusu",
    image : "https://dimg.donga.com/wps/NEWS/IMAGE/2021/07/06/107793926.5.jpg",
    rating : 5.7
  }
  ]

//component는 uppercase로 시작해야한다
function Food({name, picture, rating}){
  return (<div>
    <h1> I like {name}</h1>
    <h3>{rating}/5.0 </h3>
    <img src={picture} alt={name}/>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

//dist는 object 매우 중요!
//component는 html을 반환하는 함수
function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>(
       <Food 
       key = {dish.id} 
       name={dish.name} 
       picture = {dish.image} 
       rating = {dish.rating}/>
      ))}

      
    </div>
  );
}

export default App;