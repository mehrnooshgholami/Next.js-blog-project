import toLocalDate from "@/utils/toLocalDate";
import { UserCircleIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { useState } from "react";

const SingleComment = ({ comment }) => {
  const [onReply, setOnreply] = useState(false);
  const [commentValue,setCommentValue] = useState("")
  return (
      <div className="border border-gray-500 mb-5 rounded p-2 md:p-4">
        <div className="flex gap-x-4">
          <UserIcon className="h-10 w-10"/>
          <div className="flex flex-col justify-between">
            <span>{comment.writer?.name}</span>
            <span>{toLocalDate(comment.createdAt)}</span>
          </div>
        </div>
        <div>{comment.content}</div>
        <button onClick={()=>{setOnreply(!onReply)}}>{!onReply?"پاسخ به":"بیخیال"}</button>
        {onReply&&<div className="mt-4">
             <span className="text-gray-500 text-sm">در حال پاسخ به {comment.writer?.name}</span>
             <form>
                 <textarea
                     className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-purple-700 focus:ring-2"
                     value={commentValue}
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
           </div>}
      </div>
  );
};

export default SingleComment;

    