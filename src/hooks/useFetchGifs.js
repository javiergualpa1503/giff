import { useEffect, useState } from "react"
import { getGifsByName } from "../api/getGifs"

export const useFetchGifs = (title) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const addGifs = async () => {
    const response = await getGifsByName(title)
    setImages(response)
    setIsLoading(false)

  }

  useEffect(() => {
    addGifs()
  }, [])


  return {
    images,
    isLoading
  }
}
