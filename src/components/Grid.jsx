import { useEffect, useState } from "react"
import { getGifsByName } from "../api/getGifs"
import { GridItem } from "./GridItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const Grid = ({ title }) => {

  const { images, isLoading } = useFetchGifs(title)




  return (
    <div>

      <h3>{title}</h3>
      {
        isLoading && <h3>Cargando...</h3>
      }
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
