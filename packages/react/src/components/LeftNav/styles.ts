import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 88px;
  height: 778px;
  gap: 8px;
  padding-top: 8px;

  background: linear-gradient(
      0deg,
      rgba(27, 65, 170, 0.4),
      rgba(27, 65, 170, 0.4)
    ),
    linear-gradient(270deg, #8549ec 0.3%, #4967bb 49.51%, #49bb9d 99.61%);

  box-shadow: 4px 4px 8px rgba(11, 39, 115, 0.6),
    -4px -4px 8px rgba(141, 255, 225, 0.29),
    inset -2px -2px 2px rgba(27, 65, 170, 0.5),
    inset 2px 2px 2px rgba(141, 255, 225, 0.6);
  border-radius: 24px;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 8px;
`

export const LabelText = styled.p`
  color: #bbc6e6;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
`

export const NavIcon = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: flex-start;
  gap: 10px;
`
