import { useQuery } from 'react-query'
import { getLanguages } from '.'

export const useGetLanguagesQuery = () => {
  return useQuery<any, any, void>(['languages'], getLanguages)
}
