import { useState } from 'react';
import { StarIcon, FullFillStarIcon } from '../Icons';

function Rating() {
    const [voteIndex, setVoteIndex] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleText = () => {
        switch (voteIndex || hoverStar) {
            case 0:
                return 'Đánh giá của thành viên';
            case 1:
                return 'Dở tệ';
            case 2:
                return 'Không hay lắm';
            case 3:
                return 'Không hợp';
            case 4:
                return 'Tạm được';
            case 5:
                return 'Tuyệt hay';
            default:
                return 'Đánh giá của thành viên';
        }
    };
    return (
        <div className="rating">
            {Array(5)
                .fill()
                .map((_, index) =>
                    voteIndex >= index + 1 || hoverStar >= index + 1 ? (
                        <span
                            key={index}
                            onClick={() => setVoteIndex(index + 1)}
                            onMouseOver={() => setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                        >
                            <FullFillStarIcon />
                        </span>
                    ) : (
                        <span
                            key={index}
                            onClick={() => setVoteIndex(index + 1)}
                            onMouseOver={() => setHoverStar(index + 1)}
                            onMouseLeave={() => setHoverStar(undefined)}
                        >
                            <StarIcon />
                        </span>
                    ),
                )}

            <p>{handleText()}</p>
        </div>
    );
}

export default Rating;
