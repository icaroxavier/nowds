import { type JSXElement } from 'solid-js'

interface Props {
  children: JSXElement
}

export function Button (props: Props): JSXElement {
  return <button class="p-2 text-white rounded bg-primary">{props.children}</button>
}
