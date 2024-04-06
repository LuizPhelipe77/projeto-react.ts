import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {  //extender propriedades de um componente nativo do react"componetsProps"
    children: string
}
export function NavLink(props: NavLinkProps) {
    return (
        <a {...props}  className='font-medium text-sm'>
            {props.children}
        </a>
    )
}