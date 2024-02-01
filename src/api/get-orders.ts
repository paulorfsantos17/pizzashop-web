import { api } from '@/lib/axios'
export interface IGetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface IGetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: IGetOrdersQuery) {
  const response = await api.get<IGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  })

  return response.data
}
