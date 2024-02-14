import toLocalDate from "@/utils/toLocalDate";
import { UserCircleIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SignleComment = ({ comment, postId }) => {
  const [onReply, setOnreply] = useState(false);
  return (
    <div className="rounded-xl mb-8 overflow-hidden shadow-lg border border-gray-100 bg-white">
      <div className="flex items-center justify-start bg-gray-50 px-4 py-2">
        <UserCircleIcon className="w-12 h-12 stroke-gray-400" strokeWidth={1} />
        <div className="flex flex-col justify-between mr-4">
          <span className="block text-sm text-gray-600">{comment.writer?.name}</span>
          <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">
            {toLocalDate(comment.createdAt)}
          </span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="mt-4 leading-10">{comment.content}</div>
        <button
          className="text-sm p-4 cursor-pointer text-blue-600"
          onClick={() => setOnreply(!onReply)}
        >
          {onReply ? "بیخیال" : "پاسخ به"}
        </button>

        {onReply && (
          <div className="mt-4">
            <span className="text-gray-500 text-sm">در حال پاسخ به {comment.writer?.name}</span>
            {/* <CommentForm postId={postId} responseTo={comment._id} setOnreply={setOnreply} /> */}
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
        )}
      </div>
    </div>
  );
};

export default SignleComment;
