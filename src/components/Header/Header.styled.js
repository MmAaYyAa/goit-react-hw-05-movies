import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  box-shadow:0px 2px 1px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16),
        0px 1px 6px rgba(46, 47, 66, 0.08);
    border-bottom: 1px solid var(--border);
`;

export const Item = styled.li`
   

`;

export const List = styled.ul`
    display: flex;
    padding-top: 18px;
    padding-bottom: 18px;
    gap:40px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #27296d;
    &.active {
    color: #a393eb;
    text-decoration: underline;
  }
   
  
`;