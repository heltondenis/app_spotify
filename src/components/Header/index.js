import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search" />
        </Search>

        <User>
            <img src="https://avatars2.githubusercontent.com/u/28577527?v=4" alt="Avatar"></img>
            Helton Denis
        </User>
    </Container>
);

export default Header;