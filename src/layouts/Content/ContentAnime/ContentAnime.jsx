import './ContentAnime.scss';
import { ArrowRightIcon } from '../../../components/Icons';
import { useState } from 'react';

function ContentAnime({ title, font, children, viewColumn, weekColumn, system3, system1 }) {
    const gridSystem3 = {
        display: 'grid',
        rowGap: '20px',
        gridTemplateColumns: '33.33333% 33.33333% 33.33333%',
    };

    const gridSystem1 = {
        display: 'grid',
        rowGap: '16px',
        overflowY: 'scroll',
        maxHeight: '800px',
    };

    return (
        <>
            <div className="content__heading">
                <div className="separate"></div>
                <h2 style={{ fontSize: font }}>{title}</h2>

                {viewColumn && (
                    <a href="">
                        <div className="content__heading--view">
                            <span>Xem tất cả</span>
                            <span className="content__heading--view-icon">
                                <ArrowRightIcon />
                            </span>
                        </div>
                    </a>
                )}

                {weekColumn && (
                    <div className="content__heading_week">
                        <span className="no-active active">Ngày</span>
                        <span className="no-active">Tuần</span>
                        <span className="no-active">Tháng</span>
                        <span className="no-active">Năm</span>
                    </div>
                )}
            </div>

            {system3 && <div style={gridSystem3}>{children}</div>}
            {system1 && <div style={gridSystem1}>{children}</div>}
        </>
    );
}

export default ContentAnime;
