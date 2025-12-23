import styles from"./FoodInput.module.css";

const FoodInput=({handleOnChange}) =>{

  // this was used in event handling 
// const handleOnChange = (event) =>{console.log(event.target.value);}  // it helps us see what the changes are being made in the search bar

  return( 
    <input type="text" placeholder="Enter Food Item here." className={styles.foodInput} onChange={handleOnChange}/>

  )
};  export default FoodInput;