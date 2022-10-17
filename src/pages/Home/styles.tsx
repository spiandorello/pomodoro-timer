import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

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
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};
  gap: 0.5rem;
  
  span {
    border-radius: 8px;
    padding: 2rem 1rem;
    background: ${props => props.theme['gray-700']};
  }
`;

export const CountdownSeparator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;
  
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const StartCountdownButton = styled.button`
  border: 0;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${props => props.theme['gray-100']};
  background: ${props => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${props => props.theme['green-700']};
  }
`