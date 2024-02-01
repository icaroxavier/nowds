import {
  CheckboxContainer,
  CheckboxImage,
  CheckboxInput,
  CheckboxLabel,
} from './styles'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
      />
      <CheckboxImage $checked={checked} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  )
}
