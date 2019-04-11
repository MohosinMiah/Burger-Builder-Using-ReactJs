import React from 'react';
import classes from './Burger.css';
import BurgerIngredent from './BurgerIngredent/BurgerIngredent';


const burger = (props) =>{
return (
     <div className={classes.Burger}>
     <BurgerIngredent type="bread-top"></BurgerIngredent>
     <BurgerIngredent type="cheese"></BurgerIngredent>
     <BurgerIngredent type="meat"></BurgerIngredent>
     <BurgerIngredent type="bread-bottom"></BurgerIngredent>
        
     </div>
);

}

export default burger;