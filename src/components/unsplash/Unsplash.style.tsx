import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  padding: 1rem 0;
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.1rem;
  width: 100%;
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  padding-right: 0.5rem;
  border-bottom: 1px solid #b3aead;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  width: 15rem;

  @media (max-width: 768px) {
    width: 10rem;
  }
`

export const StyledButton = styled.button`
  border-radius: 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem 2.5rem;
  font-family: 'Dancing Script', sans-serif;

  background-image: linear-gradient(
    to left,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;

  &:hover {
    background-position: right center;
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
`

export const ImageContainer = styled.div`
  padding: 0.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`
