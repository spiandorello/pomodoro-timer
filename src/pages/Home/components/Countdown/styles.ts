import styled from 'styled-components';

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
