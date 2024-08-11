import React, { useState } from 'react';
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";

function MainContent() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="MainContent">
      <div className="container mt-4">
        <h1 className="text-center">Welcome to Sharecipe!</h1>
        <AddRecipe addRecipe={addRecipe} />
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
      </div>
    </div>
  );
}

export default MainContent;
