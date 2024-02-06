import { useTheme } from '@nowds/react'
import { getContrast } from 'polished'

export function ColorsGrid() {
  const { colors } = useTheme()
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{ background: color as string, padding: '1rem 2rem' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color as string, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>theme.colors.{key}</strong>
          <span>{color as string}</span>
        </div>
      </div>
    )
  })
}
