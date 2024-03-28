import { http, HttpResponse } from 'msw'

import { IGetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  IGetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 15 },
    { product: 'Pizza 02', amount: 50 },
    { product: 'Pizza 03', amount: 30 },
    { product: 'Pizza 04', amount: 18 },
    { product: 'Pizza 05', amount: 40 },
  ])
})
