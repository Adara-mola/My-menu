import { useState, useEffect } from 'react';
import './Recipe.css'


const Recipe= (props) => {
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=65e9dc25af3c4c41b0d6f5723047d61c&query=${props.query}&number=50`;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
         console.log(data) 
        setRecipes(data.results);
       
      }
      
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, props.query]);

  return (
    <section>
      <h3 className='recipeHeading'>Recipes</h3>
      <div className='recipeContainer'>
        {recipes.map((recipe) => {
          const { id, title, image,} = recipe;
          return (
            <div key={id}>
              <img src={image} alt={title} className='recipeImage'/>
              <div>
                <h5 className='recipeTitle'>{title}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Recipe;
