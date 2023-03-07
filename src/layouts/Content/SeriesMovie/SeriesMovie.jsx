import { ViewIcon } from '../../../components/Icons';
import './SeriesMovie.scss';

function SeriesMovie() {
    return (
        <a href="/detail">
            <div className="product">
                <div className="product__item">
                    <div className="product__item_pic" style={{ backgroundImage: `url(recent-1.jpg)` }}></div>
                    <div className="product__item__p product__item-ep item_absolute">11 / 11</div>
                    <div className="product__item__p product__item-comment item_absolute">
                        <ViewIcon />
                        200
                    </div>
                    <div className="product__item__p product__item-view item_absolute">
                        <ViewIcon />
                        100.000
                    </div>
                </div>
                <div className="product__item--category">
                    <p>Hành động</p>
                    <p>Phim bộ</p>
                </div>
                <h2 className="product__item--title">Shingeki no Kyojin Season 3 Part 2</h2>
            </div>
        </a>
    );
}

export default SeriesMovie;
