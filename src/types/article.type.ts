import { ArticleTagData } from './article-tag.type'

export interface Article {
  success: number
  data: ArticleData[]
}

export interface ArticleData {
  _id: string
  url_path: string
  title: string
  sub_title: string
  content: string
  thumbnail: string
  category: number
  status: number
  timestamp: string
  last_update: string
  order: number
  tags: ArticleTagData[]
}
