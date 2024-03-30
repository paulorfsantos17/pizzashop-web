import { http, HttpResponse } from 'msw'

import { IGetManagerRestaurantResponse } from '../get-manager-restaurant'

export const getManagerRestaurantMock = http.get<
  never,
  never,
  IGetManagerRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description',
    managerId: 'manager-custom-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
