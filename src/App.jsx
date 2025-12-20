import"bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMsg from"./component/ErrorMsg";
import Container from"./component/Container";
import FoodInput from"./component/FoodInput";

function App(){

// return (
//   <>      /*  React.Fragment: it is use at the place of div*/
//   <div>Healthy food</div>
//   <ul class="list-group">
//   <li class="list-group-item">Dal</li>
//   <li class="list-group-item">Green Vegetable</li>
//   <li class="list-group-item">Roti</li>
//   <li class="list-group-item">Salad</li>
//   <li class="list-group-item">Milk</li>
// </ul>
// </>
// );


let foodItems= ["Dal","Green Vegetable","Roti","Salad","Milk","Fruits","Nuts","Eggs"];

return(
<>
<Container>
 <h1 className="food-heading">Healthy Food</h1>
 <FoodInput/>
<ErrorMsg items={foodItems}></ErrorMsg>
<FoodItems items={foodItems}></FoodItems>
</Container>

<Container>
  <p>Above is the list of food items which are good for your health and well being.</p>
</Container>
</>
);
}

export default App;