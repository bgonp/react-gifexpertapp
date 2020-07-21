export const getGifs = async (category) => {
  const apiKey = 'NEuo9K0rfhYMdFHcUx9BH5jobiafVZde'
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=${apiKey}`
  )
  const { data } = await resp.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }))

  return gifs
}
