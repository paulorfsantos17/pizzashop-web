import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCart } from './components/day-orders-amount-card'
import { MonthCanceledOrdersAmountCart } from './components/month-canceled-orders-amount-card'
import { MonthOrdersAmountCart } from './components/month-orders-amount-card'
import { MonthRevenueCart } from './components/month-revenue-cart'
import { PopularProductsChart } from './components/popular-products-charts'
import { RevenueChart } from './components/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="dashboard" />
      <div className="gap- flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCart />
          <MonthOrdersAmountCart />
          <DayOrdersAmountCart />
          <MonthCanceledOrdersAmountCart></MonthCanceledOrdersAmountCart>
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
