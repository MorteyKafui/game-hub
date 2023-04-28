import { useQuery } from '@tanstack/react-query';
import { FtechResponse } from "./useData"
import apiClient from '../services/api-client';

interface Platform {
  id: number,
  name: string,
  slug: string
}


const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FtechResponse<Platform>>('/platforms/lists/parents').then(res => res.data), staleTime: 24 * 60 * 60 * 1000,
  // initialData: {
  //   count: platforms.length, results: platforms
  // }
})


export default usePlatforms