import { useState, useEffect } from 'react'
import Card from '../Card'
import './app.css'

export default function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=3a542766a3e1449da68d750f40babf15&number=1'
    )
      .then(res => res.json())
      .then(recipes => setRecipes(recipes))
  }, [])

  console.log(recipes)

  return (
    <div className='App'>
      {recipes.map(({ ...recipes }, i) => (
        <Card
          key={i}
          data={recipes}
        />
      ))}
    </div>
  )
}
