import { useState, useEffect } from 'react'
import Card from '../Card'
import Modal from '../Modal'
import recipeData from '../../data.json'
import './app.css'

export default function App() {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState({})
  const [open, setOpen] = useState(false)

  // const fetchData = async () => {
  //   const response = await fetch(
  //     'https://api.spoonacular.com/recipes/random?apiKey=3a542766a3e1449da68d750f40babf15&number=20'
  //   )
  //   const data = await response.json()
  //   setRecipes(data.recipes)
  // }

  useEffect(() => {
    // fetchData()
    setRecipes(recipeData)
  }, [])

  const handleOpen = recipe => {
    setOpen(true)
    setSelectedRecipe(recipe)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedRecipe({})
  }

  console.log(selectedRecipe)

  return (
    <div className='main'>
      {recipes.map((recipe, i) => (
        <Card key={i} data={recipe} onClick={() => handleOpen(recipe.id)} />
      ))}
      <Modal isOpen={open} onClose={handleClose}></Modal>
    </div>
  )
}
