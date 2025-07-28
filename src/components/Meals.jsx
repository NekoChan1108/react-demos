import React, {useEffect, useState} from 'react';
import "../assets/MealsStyle.css"
import axios from "axios";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(response => setMeals(response.data.meals)).catch(err => {
            console.log(err)
        })
    }, []);
    const mealList = meals.map((meal) => {
        return <section className={"card"}>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            <section className={"content"}>
                <p>{meal.strMeal}</p>
                <p>#{meal.idMeal}</p>
            </section>
        </section>
    })
    return (
        <div className={"items-container"}>
            {mealList}
        </div>
    );
};

export default Meals;