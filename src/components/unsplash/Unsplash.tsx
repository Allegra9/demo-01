import {
  Container,
  ImageContainer,
  ImagesContainer,
  SearchBox,
  SearchInput,
  StyledButton,
  StyledImage
} from './Unsplash.style'
import { Photo } from '@/types/unsplash'
import {
  // useGetCollectionPhotos,
  useGetPhotosByQuery
  // useGetRandomPhoto
} from '@/hooks/useUnsplash'
import { useState } from 'react'

// const collectionId = '304898'
// const query = 'akita'

export const Unsplash = () => {
  const [query, setQuery] = useState('akita')
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined)
  const { data } = useGetPhotosByQuery({ query })
  // const { data } = useGetCollectionPhotos({ collectionId })
  // const { data: photo } = useGetRandomPhoto()
  const photos = data?.results || data // [photo]

  const onSubmit = () => {
    console.log(searchInput)
    if (searchInput) setQuery(searchInput)
  }

  return (
    <Container>
      <SearchBox>
        <SearchInput
          name="searchInput"
          onChange={e => setSearchInput(e.target.value)}
        />
        <StyledButton onClick={onSubmit}>Search</StyledButton>
      </SearchBox>
      <ImagesContainer>
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
      </ImagesContainer>
    </Container>
  )
}
