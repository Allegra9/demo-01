import axios from 'axios'

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID

const UNSPLASH_ROOT = 'https://api.unsplash.com'

export const getCollectionPhotos = async ({
  collectionId
}: {
  collectionId: string
}) => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/collections/${collectionId}/photos?client_id=${clientId}`
  )
  return data
}

export const getPhotosByQuery = async ({ query }: { query: string }) => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}`
  )
  return data
}

export const getRandomPhoto = async () => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/photos/random?client_id=${clientId}`
  )
  return data
}
