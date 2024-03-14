import { Fragment } from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({comments,ParentCommentId}) => {
    return ( comments.map(comment=>comment.responseTo===ParentCommentId&&
        <div className="mr-5">
            <Fragment key={comment._id}>
                <SingleComment comment={comment} />
                <ReplyComment comments={comments} ParentCommentId={comment._id} />
            </Fragment>
        </div>) 
    );
}
 
export default ReplyComment;