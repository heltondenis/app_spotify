import React from 'react';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import Slider from 'rc-slider';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';


const Player = () => (
    <Container>
        <Current>
            <img src="https://www.radiotrindademania.com.br/files/2018/12/volta-music-trailer-music-album-cover-design.jpg" alt="album"
            />
            <div>
                <span>Times like these</span>
                <small>Foo fighters</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} />
                </button>
                <button>
                    <img src={BackwardIcon} />
                </button>
                <button>
                    <img src={PlayIcon} />
                </button>
                <button>
                    <img src={ForwardIcon} />
                </button>
                <button>
                    <img src={RepeatIcon} />
                </button>
            </Controls>

            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ED760' }}
                        handleStyle={{ border: 0 }}
                    />
                </ProgressSlider>
                <span>4:24</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="volume" />
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#fff' }}
                handleStyle={{ display: 'none' }}
                value={100}
            />
        </Volume>
    </Container>
);

export default Player;