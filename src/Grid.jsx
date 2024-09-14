import { useEffect, useState } from "react"
import { getGifsByName } from "./api/getGifs"
import { GridItem } from "./GridItem"


export const Grid = ({ title }) => {

  const [images, setImages] = useState([])

  const addGifs = async () => {
    const response = await getGifsByName(title)
    setImages(response)
  }

  useEffect(() => {
    addGifs()
  }, [])



  return (
    <div>
      <h3>{title}</h3>
      <div className="card-grid ">
        {
          images.map((image) => (
            <GridItem key={image.id} {...image} />
          ))
        }
      </div>
    </div>
  )
}
