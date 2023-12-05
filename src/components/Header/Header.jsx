import React from 'react'

import {Container, Item, List, StyledLink} from './Header.styled';

const Header = () => {
  return (
    <Container>
        <List>
            <Item>
            <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
            <StyledLink to="/movies">Movies</StyledLink>
            </Item>
        </List>
    </Container>
  )
}

export default Header