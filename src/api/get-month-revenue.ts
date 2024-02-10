import { api } from '@/lib/axios'

export interface IGetMonthRevenueResponse {
  revenue: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<IGetMonthRevenueResponse>(
    '/metrics/month-revenue',
  )

  return response.data
}
