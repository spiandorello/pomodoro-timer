import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonProps {
  variant: ButtonVariants
}

// const buttonVariants = {
//   primary: 'blue',
//   secondary: 'purple',
//   success: 'green',
//   danger: 'red',
// }

export const ButtonContainer = styled.button<ButtonProps>`
  ${(props) =>
    css`
      background-color: ${props.theme['green-500']};
    `};

  height: 40px;
  width: 200px;
`
