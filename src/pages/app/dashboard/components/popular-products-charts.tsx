import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LabelPie } from './label-pie'

const dataProduct = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 16 },
  { product: 'Marguerita', amount: 50 },
  { product: '4 Queijos', amount: 60 },
  { product: 'Frango Frito', amount: 26 },
]

const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={dataProduct}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              innerRadius={64}
              outerRadius={86}
              strokeWidth={8}
              fill={colors.emerald['500']}
              labelLine={false}
              label={(valuesLabel) => (
                <LabelPie {...valuesLabel} data={dataProduct} />
              )}
            >
              {dataProduct.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
