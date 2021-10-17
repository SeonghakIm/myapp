//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함




const foodILike = [
  {
    id:1,
    name : "goguma",
    image : "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"},
  {
    id:2,
    name : "gamza",
    image : "http://health.chosun.com/site/data/img_dir/2020/05/07/2020050702573_0.jpg"}
  ]

//component는 uppercase로 시작해야한다
function Food({name, image}){
  return (<div>
    <h1> I like {name}</h1>
    <img src={image} alt={name}/>
  </div>
  );
}

//dist는 object 매우 중요!
//component는 html을 반환하는 함수
function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>(
       <Food key = {dish.id} name={dish.name} picture = {dish.image}/>
      ))}
    </div>
  );
}

export default App;