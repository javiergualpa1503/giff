import { useState } from "react"
import { Input } from "./components/Input"
import { Grid } from "./components/Grid"

export const App = () => {

  const [categories, setCategories] = useState(['Dragon Ball'])

  const addCategories = (newCategorie) => {
    if (categories.includes(newCategorie)) return

    setCategories([newCategorie, ...categories,])
  }


  return (
    <>
      <h1>App Gif</h1>

      <Input addCategories={addCategories} />
      <ol>
        {
          categories.map((categorie) => (
            <Grid key={categorie} title={categorie} />
          ))
        }
      </ol>

    </>
  )
}
