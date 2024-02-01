import styled from 'styled-components'

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;
`

export const CheckboxImage = styled.div<{ $checked: boolean }>`
  display: ${({ $checked }) => ($checked ? 'block' : 'none')};
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  background-image: ${({ theme }) => theme.gradients.primary};
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 1px;
`

export const CheckboxInput = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid #bbc6e6;
  background: white;
`

export const CheckboxLabel = styled.span`
  font-family: 'Space Grotesk';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  color: #607ac4;
`
