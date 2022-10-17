import styled from 'styled-components';

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;
  
  display: flex;
  flex-direction: column;
  
  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    
    th {
      padding: 1rem;
      text-align: left;
      background: ${props => props.theme['gray-600']};
      color: ${props => props.theme['gray-100']};
      font-size: 0.75rem;
      line-height: 1.6;
      
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    
    td {
      background: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.75rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

interface StatusProps {
    variant: 'yellow' | 'red' |'green',
}

const STATUS_COLORS = {
    red: 'red-500',
    green: 'green-500',
    yellow: 'yellow-500',
} as const;

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background: ${props => props.theme[STATUS_COLORS[props.variant]]};;
  }
`;