import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;
export const Item = styled.li`
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: none;
  background-color: #f4eeff;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
  list-style: none;
  margin: 0;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #22313f;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;