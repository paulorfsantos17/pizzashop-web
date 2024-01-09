import { Link, LinkProps, useLocation } from 'react-router-dom'

export type INavLinkProps = LinkProps

export function NavLink(props: INavLinkProps) {
  const { pathname } = useLocation()

  const isLinkActived: boolean = pathname === props.to

  return (
    <Link
      data-current={isLinkActived}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    ></Link>
  )
}
