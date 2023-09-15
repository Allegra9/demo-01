import { Unsplash } from '@/components/unsplash'
import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Image Searchy</title>
      <meta name="Search for fun pictures" content="Image search app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Unsplash />
  </>
)

export default Home
