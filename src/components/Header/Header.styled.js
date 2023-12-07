import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 margin-top: 20px;
 height: 60px;
  box-shadow:0px 2px 1px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16),
        0px 1px 6px rgba(46, 47, 66, 0.08);
   border-radius: 5px;
   background-color: #835af1;
`;

export const Item = styled.li`
   

`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 16px;
    padding-bottom: 16px;
   
    
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    color: #2a363b;
    
  &.active {
    color: #fafafa;
    text-decoration: underline;
  }
  
`;