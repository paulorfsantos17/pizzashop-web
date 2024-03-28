import { http, HttpResponse } from 'msw'

import { IGetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  IGetMonthRevenueResponse
>('/metrics/month-revenue', () => {
  return HttpResponse.json({
    diffFromLastMonth: 10,
    revenue: 3000,
  })
})
