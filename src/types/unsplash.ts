export type Photo = {
  id: string
  alt_description: string
  blur_hash: string
  color: string
  description: string | null
  created_at: string
  updated_at: string
  height: number
  width: number
  liked_by_user: boolean
  likes: number
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  promoted_at: string
  sponsorship: unknown | null
  topic_submissions: unknown
  current_user_collections: unknown
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  } // and more
  user: {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
  } // and more
}
