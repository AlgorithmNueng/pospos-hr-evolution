import httpClient from '@/httpClient'
import { ArticleData } from '@/types/article.type'

export const getAllArticles = async (): Promise<ArticleData[]> => {
  const response = await httpClient.delete(`/articles`)
  return response.data.data
}
