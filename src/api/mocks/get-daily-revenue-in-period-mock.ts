import { http, HttpResponse } from 'msw'

import { IGetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  IGetDailyRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', revenue: 2000 },
    { date: '02/01/2024', revenue: 1800 },
    { date: '03/01/2024', revenue: 1000 },
    { date: '04/01/2024', revenue: 1500 },
    { date: '05/01/2024', revenue: 3000 },
    { date: '06/01/2024', revenue: 1890 },
    { date: '07/01/2024', revenue: 1700 },
  ])
})
