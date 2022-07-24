import httpClient from '@/httpClient'
import { ArticleData } from '@/types/article.type'

export const getAllArticles = async (): Promise<ArticleData[]> => {
  const response = await httpClient.get(`/articles`)
  return response.data.data
}
