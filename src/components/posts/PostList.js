import {AnnotationIcon, BookmarkIcon, ChevronDownIcon,ClockIcon, HeartIcon} from "@heroicons/react/outline"
import Link from "next/link";
import PostIntraction from "./postintraction";
import SEO from "@/common/SEO";
const PostList = ({data}) => {
    return ( 
        <>
                   {
                            data.map((item,index)=>{
                            return(
                            <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 max-l-[350px]">
                                <div className="aspect-w-16 aspect-h-9">
                                <Link href={`/posts/${item.hashId}/${item.slug}`}>
                                    <img src={item.coverImage} className="rounded-3xl w-full h-full object-center object-cover flex flex-col p-2 cursor-pointer"/>
                                </Link>
                                </div>
                                <div className="bg-gray-50 rounded-2xl h-40 flex flex-col w-full justify-between flex-1">
                                <Link href={`/posts/${item.hashId}/${item.slug}`}>
                                    <h2 className="cursor-pointer">{item.title}</h2>
                                </Link>
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <img src={item.coverImage} className="w-6 h-6 rounded-full ring-2 ring-white"/>
                                        <span className="text-sm">{item.author.name}</span>
                                    </div>   
                                    <Link href={`/blogs/${item.category.englishTitle}`}>
                                        <span className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer">{item.category.englishTitle}</span>
                                    </Link>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <PostIntraction post={item}/>

                            <div className="flex items-center text-[10px] text-gray-400 font-bold">
                            <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                            <span className="ml-1">زمان مطالعه:</span>
                            <span className="ml-1 leading-3">{item.readingTime}</span>
                            <span>دقیقه</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                    })
                    }
        </>
    );
}
 
export default PostList;