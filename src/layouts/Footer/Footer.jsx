import { Facebook, Twitter, Youtube, Instagram, TopIcon } from '../../components/Icons';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__nav">
                    <a href="/" className="logo">
                        <img src="logo.png" alt="" />
                    </a>

                    <ul className="footer__nav--list">
                        <li>
                            <a href="">Yêu cầu Anime</a>
                        </li>
                        <li>
                            <a href="">Chat Anime / Discord</a>
                        </li>
                        <li>
                            <a href="">Thuật Ngữ</a>
                        </li>
                        <li>
                            <a href="">Group thảo luận</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__nav--network">
                    <a href="">
                        <div className="footer__nav--network-icon">
                            <Facebook />
                        </div>
                    </a>
                    <a href="">
                        <div className="footer__nav--network-icon">
                            <Instagram />
                        </div>
                    </a>
                    <a href="">
                        <div className="footer__nav--network-icon">
                            <Twitter />
                        </div>
                    </a>
                    <a href="">
                        <div className="footer__nav--network-icon">
                            <Youtube />
                        </div>
                    </a>

                    <a href="#" className="back-to-top">
                        <TopIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
