import {
  getCollectionPhotos,
  getPhotosByQuery,
  getRandomPhoto
} from '@/api/unsplash'
import { useQuery } from '@tanstack/react-query'

const staleTime = 2 * 60 * 60 * 1000 // 2hrs

export const useGetPhotosByQuery = ({ query }: { query: string }) =>
  useQuery([query], () => getPhotosByQuery({ query }), {
    staleTime
  })

export const useGetRandomPhoto = () =>
  useQuery(['random-photo'], () => getRandomPhoto(), {
    staleTime
  })

export const useGetCollectionPhotos = ({
  collectionId
}: {
  collectionId: string
}) =>
  useQuery(
    ['collection-photos', collectionId],
    () => getCollectionPhotos({ collectionId }),
    {
      staleTime
    }
  )
