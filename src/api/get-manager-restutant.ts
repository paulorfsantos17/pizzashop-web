import { api } from '@/lib/axios'

interface IGetManagerRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagerRestaurant() {
  const response = await api.get<IGetManagerRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
