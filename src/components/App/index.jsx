import { useState, useEffect } from 'react'
import Card from '../Card'
import './app.css'

export default function App() {
  const [recipes, setRecipes] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      'https://api.spoonacular.com/recipes/random?apiKey=3a542766a3e1449da68d750f40babf15&number=20'
    )
    const data = await response.json()
    setRecipes(data.recipes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(recipes)

  return (
    <div className='App'>
      {recipes.map((recipe, i) => (
        <Card key={i} data={recipe} />
      ))}
    </div>
  )
}
