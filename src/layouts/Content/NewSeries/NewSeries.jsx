import './NewSeries.scss';
import { ViewIcon } from '../../../components/Icons';
function NewSeries() {
    return (
        <div className="new__series">
            <div className="new__series--pic">
                <img src="new-series-1.jpg" alt="" />
            </div>
            <div className="new__series--block">
                <div className="new__series--cate">
                    <span>Hành động</span>
                    <span>Movie</span>
                </div>
                <div className="new__series--title">
                    <a href="">The Seven Deadly Sins: Wrath of the Gods</a>
                </div>
                <div className="new__series--view">
                    <ViewIcon />
                    20.123 Lượt xem
                </div>
            </div>
        </div>
    );
}

export default NewSeries;
