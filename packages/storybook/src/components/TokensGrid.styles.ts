import styled from 'styled-components'

export const TokensGridContainer = styled.table`
  width: 100%;
  font-family: sans-serif;
  color: #fff;
  border-collapse: collapse;

  thead {
    th {
      padding: 0.75rem 1rem;
      text-align: left;
    }
  }
  tbody {
    td {
      padding: 0.75rem 1rem;
      color: #ccc;
      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      &::last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
    tr {
      &:nth-child(even) {
        td {
          background: #444;
        }
      }
    }
  }
`
