import { useTheme } from '../../index'

export function GradientsGrid() {
  const { gradients } = useTheme()
  return Object.entries(gradients).map(([key, gradient]) => {
    return (
      <div
        key={key}
        style={{ background: gradient as string, padding: '2rem' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: '#000',
          }}
        >
          <strong>${key}</strong>
          <span>{gradient as string}</span>
        </div>
      </div>
    )
  })
}
