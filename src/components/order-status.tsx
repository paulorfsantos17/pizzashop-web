export type IOrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface IOrderStatusProps {
  status: IOrderStatus
}

const orderStatusMap: Record<IOrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em Preparo',
}

const orderStatusStyleMap: Record<IOrderStatus, string> = {
  pending: 'h-2 w-2 rounded-full bg-slate-400',
  canceled: 'h-2 w-2 rounded-full bg-rose-500',
  delivered: 'h-2 w-2 rounded-full bg-emerald-500',
  delivering: 'h-2 w-2 rounded-full bg-amber-500',
  processing: 'h-2 w-2 rounded-full bg-amber-500',
}

export function OrderStatus({ status }: IOrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span data-testid="badge" className={orderStatusStyleMap[status]}></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
