import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Button({ children }: Props) {
  return (
    <button className="p-2 text-white rounded bg-primary">{children}</button>
  )
}
