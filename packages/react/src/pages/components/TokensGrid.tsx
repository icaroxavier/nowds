import { TokensGridContainer } from './TokensGrid.styles'
import { useTheme } from '../../index'

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
          value = String(value)
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && value.includes('rem') && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {hasRemValue && value.includes('px') && <td>{value}</td>}
            </tr>
          )
        })}
      </tbody>
    </TokensGridContainer>
  )
}
