import { Container, ImageContainer } from './Unsplash.style'
import Image from 'next/image'
import { Photo } from '@/types/unsplash'
import {
  // useGetCollectionPhotos,
  useGetPhotosByQuery
  // useGetRandomPhoto
} from '@/hooks/useUnsplash'

// const collectionId = '304898'
const query = 'forest'

export const Unsplash = () => {
  const { data } = useGetPhotosByQuery({ query })
  // const { data } = useGetCollectionPhotos({ collectionId })
  // const { data: photo } = useGetRandomPhoto()
  const photos = data?.results || data // [photo]

  return (
    <Container>
      {photos?.map((item: Photo) => (
        <ImageContainer key={item.id}>
          <Image
            src={item.urls.small}
            alt="Unsplash image"
            width={300}
            height={300}
          />
        </ImageContainer>
      ))}
    </Container>
  )
}
