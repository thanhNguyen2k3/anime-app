import './CommentAccount.scss';

function CommentAccount() {
    return (
        <div className="comment__content">
            <img src="user-img.jpg" alt="" />
            <div className="comment__content--block">
                <h3>Thanh Nguyễn</h3>
                <p>Anime hay quá !</p>
                <div className="comment__content--feedback">
                    <span className="comment__content--feedback-action">Thích</span>
                    <span className="comment__content--feedback-action">Phản hồi</span>
                    <span className="comment-time">25 phút trước</span>
                </div>
            </div>
        </div>
    );
}

export default CommentAccount;
