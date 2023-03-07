import './Content.scss';
import ContentAnime from './ContentAnime/ContentAnime';
import NewSeries from './NewSeries/NewSeries';
import SeriesMovie from './SeriesMovie';
import TopSeries from './TopSeries';

function Content() {
    return (
        <div id="content">
            <div className="content-left">
                {/* Anime trending */}
                <div className="content__column">
                    <ContentAnime title={'Đang Hot'} font={'2.4rem'} viewColumn system3>
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                    </ContentAnime>
                </div>

                {/* Anime Hot */}

                <div className="content__column">
                    <ContentAnime title={'Phổ biến nhất'} font={'2.4rem'} viewColumn system3>
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                        <SeriesMovie />
                    </ContentAnime>
                </div>
            </div>

            <div className="content-right">
                {/* Anime top view */}
                <div className="content__column">
                    <ContentAnime title={'Top view'} font={'1.8rem'} weekColumn system1>
                        <TopSeries />
                        <TopSeries />
                        <TopSeries />
                        <TopSeries />
                        <TopSeries />
                        <TopSeries />
                    </ContentAnime>

                    <ContentAnime title={'New Series'} font={'1.8rem'} system1>
                        <NewSeries />
                        <NewSeries />
                        <NewSeries />
                        <NewSeries />
                        <NewSeries />
                        <NewSeries />
                        <NewSeries />
                    </ContentAnime>
                </div>
            </div>
        </div>
    );
}

export default Content;
