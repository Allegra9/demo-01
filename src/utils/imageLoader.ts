type LoaderProps = {
  src: string
  width: number
  quality?: number
}

export const loader = ({ src }: LoaderProps) => src
