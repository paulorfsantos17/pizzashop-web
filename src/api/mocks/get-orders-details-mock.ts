import { http, HttpResponse } from 'msw'

import {
  IGetOrderDetailsParams,
  IGetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  IGetOrderDetailsParams,
  never,
  IGetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johnbdoe@example.com',
      phone: '(99) 99999-9999',
    },
    status: 'delivered',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'orders-item-1',
        priceInCents: 1000,
        product: {
          name: 'Pizza Mussarela',
        },
        quantity: 1,
      },
      {
        id: 'orders-item-1',
        priceInCents: 2000,
        product: {
          name: 'Pizza Calabresa',
        },
        quantity: 2,
      },
    ],
    totalInCents: 3000,
  })
})
