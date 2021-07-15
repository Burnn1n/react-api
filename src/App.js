import './App.css';
import Recipe from './recipe';
import React,{useEffect, useState} from "react";

const App = () =>{

  const APP_ID = "a8e1565e";
  const APP_KEY = "662e46eac7d184ad63f92f6abf4b41f4	";
  
  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const exampleReq = "https://api.edamam.com/search?q="+query+"&app_id=" + APP_ID + "&app_key=" + APP_KEY;

  //query oorchlogdoh uyd duudagdaj ajillana
  useEffect(() =>{
    getRecipe();
    console.log(recipes);
  },[query]);

  // get api data from link (exampleReq)
  const getRecipe = async() =>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    //recipe state array-d api-s awsan data-g oruulah
    setRecipes(data.hits);
  }

  // input oorchlogdoh burd search huwisagchid garaas ogson utgiig ogno
  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  // search button deer darah uyd(form submit hiih uyd) query-d haih utgiig ogno
  // deerh useEffect ni query-n utga oorchlogdoh burd ajillah tul ahin huselt ilgeen api-n data-g awan recipe huwisagchid
  // utgiig ogno
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
      {recipes.map(recipe =>(
        
        <Recipe 
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  );
}
export default App;
