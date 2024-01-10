import { Input } from '@/components/ui/input'
// interface IOrderTableFiltersProps = {}

export function OrderTableFilters({}: IOrderTableFiltersProps) {
  return (
    <form action="" className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do cliente" className="h-8 w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
    </form>
  )
}
