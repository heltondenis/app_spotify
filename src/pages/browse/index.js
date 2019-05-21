import React from 'react';
import { Container, Title, List, Playlist } from './styles';

const Browse = () => (
    <Container>
        <Title>Navegar</Title>
        <List>
            <Playlist to="/playlists/1">
                <img src="https://cdn-images-1.medium.com/max/1200/1*vzZM9u2JXHTKjk2lXnepzQ.jpeg"
                />
                <strong>Rock dos bons</strong>
                <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock</p>
            </Playlist>
        </List>
    </Container>
);

export default Browse;