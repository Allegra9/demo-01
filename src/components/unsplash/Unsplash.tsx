import { Container, ImageContainer, StyledImage } from './Unsplash.style'
import { Photo } from '@/types/unsplash'
import {
  // useGetCollectionPhotos,
  useGetPhotosByQuery
  // useGetRandomPhoto
} from '@/hooks/useUnsplash'

// const collectionId = '304898'
const query = 'red panda'

export const Unsplash = () => {
  const { data } = useGetPhotosByQuery({ query })
  // const { data } = useGetCollectionPhotos({ collectionId })
  // const { data: photo } = useGetRandomPhoto()
  const photos = data?.results || data // [photo]

  return (
    <Container>
      {photos?.map((item: Photo) => (
        <ImageContainer key={item.id}>
          <StyledImage
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
