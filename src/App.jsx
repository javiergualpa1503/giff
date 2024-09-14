import { useState } from "react"
import { Input } from "./Input"
import { Grid } from "./Grid"

export const App = () => {

  const [categories, setCategories] = useState(['Pokemon'])

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
