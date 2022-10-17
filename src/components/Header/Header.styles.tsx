import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    a {
      color: ${props => props.theme.white};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: transform 0.5s;

      :hover {
        color: ${props => props.theme['green-500']};
        border-bottom: 3px solid ${props => props.theme['green-500']};
      }

      &.active {
        color: ${props => props.theme['green-500']};
      }
    }
  }
`;