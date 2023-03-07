import CommentAccount from '../../../components/CommentAccount/CommentAccount';
import ContentAnime from '../../Content/ContentAnime/ContentAnime';
import Button from '../../../components/Button';
import './Comments.scss';

function Comments() {
    return (
        <>
            <ContentAnime title={'Bình luận'} font={'1.8rem'} />
            <div className="comments">
                <div className="comment__submit">
                    <form>
                        <textarea name="" id="comment" cols="10" rows="4" placeholder="Bình luận của bạn..."></textarea>
                        <Button to>Bình luận</Button>
                    </form>
                </div>
                <CommentAccount />
                <CommentAccount />
                <CommentAccount />
                <CommentAccount />
            </div>
        </>
    );
}

export default Comments;
