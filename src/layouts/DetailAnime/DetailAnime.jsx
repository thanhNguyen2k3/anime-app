import './DetailAnime.scss';
import DetailContent from './DetailContent';
import Comments from './Comments';
import RelatedAnime from './RelatedAnime/RelatedAnime';

function DetailAnime() {
    return (
        <div className="wrapper__detail">
            <div className="row-1">
                <DetailContent />
            </div>
            <div className="row-2">
                <div className="col-left">
                    <Comments />
                </div>
                <div className="col-right">
                    <RelatedAnime />
                </div>
            </div>
        </div>
    );
}

export default DetailAnime;
