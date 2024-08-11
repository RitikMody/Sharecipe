import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = ({recipes,setRecipes}) => {
//   const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://ec2-3-141-197-247.us-east-2.compute.amazonaws.com:8000/api/recipe'); 
        setRecipes(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err)
        setError(err);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading recipes: {error.message}</p>;

  return (
    <div className="RecipeList container mt-4">
      {recipes.length > 0 ? (
        <ul className="list-group">
          {recipes.map((recipe, index) => (
            <li key={index} className="list-group-item">
              <h5>{recipe.title}</h5>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center"><p>No recipes available.</p></div>
      )}
    </div>
  );
};

export default RecipeList;
