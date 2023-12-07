import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(NavLink)`
color: #a06ee1;
 display: inline-block;
 width: 60px;
  height: 48px;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 28px;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #b693fe;
  }
`
export const Container = styled.div`
  max-width: 1200px;
  padding: 50px;
  height: 100vh;
`;

export const Img = styled.img`
  height: 400px;
  padding: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
`;

export const MovieTitle =  styled.h3`
font-size: 24px;
color: #22313f;
`

export const P = styled.p`
color: #363b4e;
`

export const InfoTitle = styled.h4`
color: #22313f;
font-size: 18px;
`

export const AddInfo = styled(NavLink)`
  
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: #b693fe;
  }
`

export const InfoDiv = styled.div`
margin-left:20px;
`