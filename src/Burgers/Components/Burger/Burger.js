import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
const burger=(props)=>{
    let tansformedIngredients=Object.keys(props.ingredients)
    .map(igkey=>{
        return[...Array(props.ingredients[igkey])].map((_,i)=>{
           return  <BurgerIngredient key={igkey+i} type={igkey}/>
                });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]
    );
    if(tansformedIngredients.length===0){
        tansformedIngredients=<p>Please add ingredients</p>
    }
    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
            {tansformedIngredients}
        <BurgerIngredient type="bread-bottom" />

        </div>
    );
}
export default burger;