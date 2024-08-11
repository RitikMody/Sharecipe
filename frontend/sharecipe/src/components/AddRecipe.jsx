import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newRecipe = { title, cuisine, instructions };
      const response = await axios.post('http://ec2-3-141-197-247.us-east-2.compute.amazonaws.com:8000/api/recipe', newRecipe); // Replace with your actual API endpoint
    //   setRecipes([...recipes, response.data]);
      addRecipe(response.data);
      setTitle('');
      setCuisine('');
      setInstructions('');
      setSuccess(true);
      setError(null);
    } catch (err) {
        console.log(err);
      setError('Failed to add recipe. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="AddRecipe container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisine">Cuisine</label>
            <input
              type="text"
              className="form-control"
              id="cuisine"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              className="form-control"
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AddRecipe;
