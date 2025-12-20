import styles from "./Item.module.css";

const Item = ({foodItems}) => {

  const handleBuyButtonClicked = (foodItem) =>{
    console.log(`You bought ${foodItem}`); // need to remove foodItem Fromm Data() to use alt method.
  }

  return(
    <li className={`${styles["kg-item"]} list-group-item`}>   
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button className={`${styles.button} btn btn-info` } 
      onClick={() => handleBuyButtonClicked(foodItems)} // onClick = {handleBuyButtonClicked}, alt way to write same function.
      >Buy</button>
      </li>
  );
};

export default Item; 