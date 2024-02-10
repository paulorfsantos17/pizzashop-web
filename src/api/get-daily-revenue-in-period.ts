import { api } from '@/lib/axios'

export type IGetDailyRevenueInPeriodResponse = {
  date: string
  revenue: number
}[]

export interface IGetDailyRevenueInPeriodProps {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: IGetDailyRevenueInPeriodProps) {
  const response = await api.get<IGetDailyRevenueInPeriodResponse>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
