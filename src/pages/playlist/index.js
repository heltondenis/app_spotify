import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

console.tron.log('teste');

const Playlist = () => (
    <Container>
        <Header>
            <img src="https://cdn-images-1.medium.com/max/1200/1*vzZM9u2JXHTKjk2lXnepzQ.jpeg"

            />

            <div>
                <span>PLAYLIST</span>
                <h1>Rock Forever</h1>
                <p>13 músicas</p>
                <button>PLAY</button>
            </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
            <thead>
                <th />
                <th>Título</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th><img src={ClockIcon} alt="clock" /></th>
            </thead>

            <tbody>
                <tr>
                    <td><img src={PlusIcon} /></td>
                    <td>Papercut</td>
                    <td>Link Park</td>
                    <td>Hybrid</td>
                    <td>3:26</td>
                </tr>
            </tbody>
        </SongList>
    </Container>
);

export default Playlist;