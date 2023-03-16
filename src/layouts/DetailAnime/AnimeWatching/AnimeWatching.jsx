import Rating from '../../../components/Rating/Rating';
import Video from '../../../components/Video';
import ContentAnime from '../../Content/ContentAnime/ContentAnime';
import './AnimeWatching.scss';

const video_src = ['./video1.mp4', './video2.mp4', './video3.mp4'];

function AnimeWatching() {
    return (
        <div className="wrapper__watch">
            <h1>Video</h1>
            <div className="wrapper__watch_block">
                {/* Video */}
                <Video src={video_src[1]} />
                {/* Danh sách tập phim */}
            </div>
            <div className="wrapper__watch_episode">
                <h3 className="wrapper__watch_episode--title">Tập phim : </h3>
                <div className="wrapper__watch_episode--element">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                </div>
            </div>
            <article className="wrapper__watch_poster">
                <div className="wrapper__watch_poster--col-left">
                    <img src="./pic1.jpg" alt="" />
                </div>
                <div className="wrapper__watch_poster--col-right">
                    <h2 className="wrapper__watch_poster--title">
                        Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. II
                    </h2>
                    <p className="wrapper__watch_poster--subtitle">
                        BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense Season 2, BOFURI: I Don't Want to
                        Get Hurt, so I'll Max Out My Defense 2nd Season, I hate being in pain, so I think I'll make a
                        full defense build 2, I Hate Getting Hurt, So
                    </p>
                    <p className="wrapper__watch_poster--description">
                        Xin chú ý, phần 2 của Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu.
                    </p>
                    <div className="wrapper__watch_poster--rate">
                        <Rating />
                    </div>
                </div>

                <img className="wrapper__watch_poster--layout" src="./posterAnime.webp" alt="" />
            </article>
        </div>
    );
}

export default AnimeWatching;
