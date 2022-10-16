import { ButtonContainer, ButtonVariants } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariants
}

export function Button(props: ButtonProps) {
  const { variant = 'primary' } = props

  return <ButtonContainer variant={variant}>Click me</ButtonContainer>
}
