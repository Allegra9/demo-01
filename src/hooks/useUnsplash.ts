import {
  getCollectionPhotos,
  getPhotosByQuery,
  getRandomPhoto
} from '@/api/unsplash'
import { useQuery } from 'react-query'

const staleTime = 1000 * 60 * 60 * 2

export const useGetPhotosByQuery = ({ query }: { query: string }) =>
  useQuery(query, () => getPhotosByQuery({ query }), {
    staleTime
  })

export const useGetRandomPhoto = () =>
  useQuery('random-photo', () => getRandomPhoto(), {
    staleTime
  })

export const useGetCollectionPhotos = ({
  collectionId
}: {
  collectionId: string
}) =>
  useQuery('collection-photos', () => getCollectionPhotos({ collectionId }), {
    staleTime
  })
