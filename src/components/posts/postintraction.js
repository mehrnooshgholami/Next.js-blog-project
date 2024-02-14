import { toPersianDigits } from "@/utils/toPersianDigits";
import { AnnotationIcon, BookmarkIcon, HeartIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolideBookmarkIcon , HeartIcon as SolidHearIcon} from "@heroicons/react/solid";

const PostIntraction = ({post,isSmall,className}) => {
    const iconSize = `${!isSmall?"w-4 h-4":"w-6 h-6"}`
    return ( 
    <div className={`flex items-center ${!isSmall?"gap-x-2":"gap-x-4"} ${className}`}>
            <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
            <AnnotationIcon className={`${iconSize} stroke-gray-500`}/>
            <span className="text-xs text-gray-500 font-bold leading-3">{toPersianDigits(post.commentsCount)}</span>
            </button>
            <button className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all">
            {!post.isLiked ? <SolidHearIcon className={`${iconSize} fill-red-current`}/> : <HeartIcon className={`${iconSize} stroke-red-current`}/>}
            <span className="text-xs font-bold leading-3">{toPersianDigits(post.likesCount)}</span>
            </button>
            <button className="bg-blue-100 p-0.5 rounded flex items-center gap-x-1 text-blue-500 hover:bg-blue-500 hover:text-blue-100 transition-all">
            {post.isBookmarked ? <SolideBookmarkIcon className={`${iconSize} fill-current`}/> :  <BookmarkIcon className={`${iconSize} stroke-current`}/>}
            </button>
        </div>
     );
}
 
export default PostIntraction;