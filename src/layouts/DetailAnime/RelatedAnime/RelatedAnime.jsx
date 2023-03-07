import './RelatedAnime.scss';
import TopSeries from '../../Content/TopSeries';
import ContentAnime from '../../Content/ContentAnime/ContentAnime';

function RelatedAnime() {
    return (
        <div>
            <ContentAnime title={'Anime liên quan'} system1>
                <TopSeries />
                <TopSeries />
                <TopSeries />
                <TopSeries />
                <TopSeries />
            </ContentAnime>
        </div>
    );
}

export default RelatedAnime;
