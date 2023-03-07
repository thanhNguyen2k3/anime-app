import './DetailContent.scss';
import Button from '../../../components/Button';
import { HeartIcon } from '../../../components/Icons/Icon';
import Rating from '../../../components/Rating/Rating';

function DetailContent() {
    return (
        <div className="detail__content">
            <div className="detail__content--pic" style={{ backgroundImage: 'url(./details-pic.jpg)' }}></div>
            <div className="detail__content--block">
                <h3 className="detail__content--block-title">Fate Stay Night: Unlimited Blade</h3>
                <h5 className="detail__content--block-author">フェイト／ステイナイト, Feito／sutei naito</h5>
                <p className="detail__content--block-description">
                    Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body.
                    For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But
                    her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the
                    fabled Ace!
                </p>
                <div className="detail__content--block-list">
                    <ul className="detail__content--block-list-item">
                        <li>
                            <span>Type:</span>TV Series
                        </li>
                        <li>
                            <span>Studios:</span>TV Series
                        </li>
                        <li>
                            <span>Date aired:</span>TV Series
                        </li>
                        <li>
                            <span>Status:</span>TV Series
                        </li>
                        <li>
                            <span>Genre:</span>TV Series
                        </li>
                    </ul>
                    <ul className="detail__content--block-list-item">
                        <li>
                            <span>Scores:</span>TV Series
                        </li>
                        <li>
                            <span>Rating:</span>TV Series
                        </li>
                        <li>
                            <span>Duration:</span>TV Series
                        </li>
                        <li>
                            <span>Quality:</span>TV Series
                        </li>
                        <li>
                            <span>Views:</span>TV Series
                        </li>
                    </ul>
                </div>
                <div className="detail__content--block-btns">
                    <Button leftIcon={<HeartIcon />} to>
                        Follow
                    </Button>
                    <Button href={'#'}>Xem ngay</Button>
                </div>
            </div>
            <Rating />
        </div>
    );
}

export default DetailContent;
