import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Button({ children }: Props) {
    return <button className="p-2 bg-green-500 text-white rounded">{children}</button>
}