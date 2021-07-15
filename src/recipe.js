import React from "react";
import "./App.css";

const Recipe = ({title, calories, image, ingredients}) =>{
	return (
		<div className="recipes">
			<h1>{title}</h1>
			<ol>
				{ingredients.map(ingredients =>(
					<li>{ingredients.text}</li>
				))}
			</ol>
			<p>{Math.round(calories)} calorie</p>
			<img src={image} alt="" />
		</div>
	);
}
export default Recipe;