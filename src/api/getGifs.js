
export const getGifsByName = async (name) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=K8Rs1hpt0EpEADC8tfxnzqOEDedIedbF&q=${name}&limit=5`)

  const { data } = await res.json()

  const images = data.map(element => {
    return {
      id: element.id,
      title: element.title,
      url: element.images.fixed_width_downsampled.url
    }
  })

  return images
}