import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  flex-wrap: wrap;
  font-weight: bold;
`;

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  height: 2.5rem;
  border-bottom: 2px solid ${props => props.theme['gray-500']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${props => props.theme['gray-100']};
  
  &:focus {
   box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  min-width: 18rem;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;