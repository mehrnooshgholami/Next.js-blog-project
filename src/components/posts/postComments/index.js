import { Fragment } from "react";
import SignleComment from "./SignleComment";
const PostComment = ({post}) => {
    return ( 
        <div>
        <h2 className="font-black text-2xl mb-8">نظرات</h2>
        {post.comments.map((comment, index) => {
          return (
            !comment.responseTo &&
            comment.status === 2 && (
              <Fragment key={comment._id}>
                <SignleComment comment={comment} postId={post._id} />
              </Fragment>
            )
          );
        })}
  
        {/* base comment form */}
        <div className="mt-8">
          <span className="font-bold md:text-lg">ارسال دیدگاه جدید</span>
          {/* <CommentForm postId={post._id} responseTo={null} /> */}
          <form>
            <textarea
                className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-purple-700 focus:ring-2"
                // value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                placeholder="نظرت رو برام بنویس ..."
            />
            <button
                className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-700 rounded-2xl text-white px-3 md:text-lg"
                // onClick={submitHandler}
            >
                ارسال نظر
            </button>
        </form>
        </div>
      </div>
     );
}
 
export default PostComment;