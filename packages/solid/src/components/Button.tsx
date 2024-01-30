import { type JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
  variant?: 'primary' | 'secondary'
}

export function Button ({ children, variant = 'primary' }: Props): JSXElement {
  return (
    <button 
      data-variant={variant} 
      class="text-xs leading-none font-medium py-[0.625rem] px-4 rounded-2xl gap-[0.625rem] flex items-center justify-center 
      data-[variant=primary]:bg-primary-gradient data-[variant=primary]:text-white
      data-[variant=secondary]:py-[calc(0.625rem-1px)] data-[variant=secondary]:bg-white data-[variant=secondary]:text-primary data-[variant=secondary]:border data-[variant=secondary]:border-solid data-[variant=secondary]:border-primary
      "
    >
      {children}
    </button>
  )
}
