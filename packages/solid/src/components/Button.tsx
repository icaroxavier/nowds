import { JSXElement } from "solid-js"

type Props = {
    children: JSXElement
}

export function Button({ children }: Props) {
    return <button class="p-2 text-white rounded bg-primary">{children}</button>
}