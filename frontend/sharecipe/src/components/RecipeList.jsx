import { useState } from "react";


const RecipeList = () => {
    const [data,setData] = useState([{"title":"Vada Pav"},]);
    return(
        <div className="RecipeList">
            {data.map((recipe)=>(
                <h1>{recipe.title}</h1>
            )) }
        </div>
    );
}; 

export default RecipeList;