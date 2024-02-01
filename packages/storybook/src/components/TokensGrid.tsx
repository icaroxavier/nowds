import { TokensGridContainer } from './TokensGrid.styles'
import { useTheme } from '@nowds/react'

interface TokensGridProps {
  token: string
  hasRemValue?: boolean
}

export function TokensGrid({ token, hasRemValue = false }: TokensGridProps) {
  const theme = useTheme() as Record<string, Record<string, string>>

  return (
    <TokensGridContainer>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(theme[token]).map(([key, value]) => {
          const stringValue = String(value)
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{stringValue}</td>
              {hasRemValue && stringValue.includes('rem') && (
                <td>{Number(stringValue.replace('rem', '')) * 16}px</td>
              )}
              {hasRemValue && stringValue.includes('px') && (
                <td>{stringValue}</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </TokensGridContainer>
  )
}
