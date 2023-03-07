import './NavSlide.scss';
import Slides from './Slide';

function NavSlide() {
    const slides = [
        {
            id: 1,
            image_url: new URL('../../assets/images/s1.jpg', import.meta.url).href,
            name: 'Fate / Stay Night: Unlimited Blade Works',
        },
        {
            id: 2,
            image_url: new URL('../../assets/images/s2.jpg', import.meta.url).href,
            name: 'One Piece (1999)',
        },
        {
            id: 3,
            image_url: new URL('../../assets/images/s3.jpg', import.meta.url).href,
            name: 'Spy Kyoushitsu',
        },
        {
            id: 4,
            image_url: new URL('../../assets/images/s4.jpg', import.meta.url).href,
            name: 'Death Note',
        },
        {
            id: 5,
            image_url: new URL('../../assets/images/s5.jpg', import.meta.url).href,
            name: 'NieR:Automata Ver1.1a',
        },
    ];

    return (
        <div className="container__slides">
            <Slides slides={slides} />
        </div>
    );
}

export default NavSlide;
