export type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>

export function InputText(props: InputTextProps) {
  return (
    <input
      {...props}
      className="py-[calc(0.25rem-1px)] px-3 text-sm leading-6 text-nowLight rounded-lg border border-solid border-nowLight outline-none focus:border-primary transition-colors"
    />
  )
}
