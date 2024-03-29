import { type JSXElement } from 'solid-js'

export type ButtonProps = {
  children: JSXElement
  variant?: 'primary' | 'secondary'
}

export function Button ({ children, variant = 'primary' }: ButtonProps): JSXElement {
  return (
    <button
   
      data-variant={variant} 
      class="buttonGroup text-xs leading-none font-medium p-[1px]   rounded-2xl gap-[0.625rem] flex items-center justify-center bg-primary-gradient text-white"
    >
      <div 
      data-variant={variant} 
      class='
        rounded-[calc(1rem-1px)] flex items-center justify-center w-full h-full py-[calc(0.625rem-1px)] px-[calc(1rem-1px)]
      data-[variant=secondary]:bg-white data-[variant=secondary]:text-primary'
      >
        {children}
      </div>
    </button>
  )
}
