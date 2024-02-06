import { useTheme } from '@nowds/react'

export function GradientsGrid() {
  const { gradients } = useTheme()
  return Object.entries(gradients).map(([key, gradient]) => {
    return (
      <div
        key={key}
        style={{
          background: gradient as string,
          padding: '1rem 2rem',
          marginBottom: '0.25rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: '#000',
          }}
        >
          <strong>
            theme.gradients{isNaN(Number(key)) ? '.' : '['}
            {key}
            {isNaN(Number(key)) ? '' : ']'}
          </strong>
          <span>{gradient as string}</span>
        </div>
      </div>
    )
  })
}
