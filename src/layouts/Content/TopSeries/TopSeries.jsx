import { ViewIcon } from '../../../components/Icons';
import './TopSeries.scss';

function TopSeries() {
    return (
        <div className="product">
            <div className="product__top_view">
                <div className="product__top_view--pic" style={{ backgroundImage: `url(tv-3.jpg)` }}></div>
                <div className="product__top_view--item product__top_view--ep">18/?</div>
                <div className="product__top_view--item product__top_view--view">
                    <ViewIcon />
                    4953
                </div>
                <div className="product__top_view--title">Sword art online alicization war of underworld</div>
            </div>
        </div>
    );
}

export default TopSeries;
