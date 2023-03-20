import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
`

export const ImageContainer = styled.div`
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`
