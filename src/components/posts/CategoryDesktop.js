import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export const CategoryDesktop = ({category}) => {
    const [isOpen,setisOpen] = useState(false)
  return (
    <>
        <div className="bg-white rounded-3xl overflow-hidden">
            <div className="flex items-center justify-between py-4 px-4 cursor-pointer bg-purple-400"
            onClick={()=>{setisOpen(!isOpen);}}>
              <span className="text-white">دسته بندی مقالات</span>
              <ChevronDownIcon className={`w-6 h-6 stroke-white transition duration-200 ${isOpen?"rotate-180":"rotate-0"}`}/>
            </div>
            <div className={`flex flex-col transition duration-200 ${isOpen?"block":"hidden"}`}>
              <Link href="#">
                <p className="block py-2 pr-4 mb-1 hover:bg-purple-200">همه مقالات</p>
              </Link>
                {
                  category.data.map((item)=>{
                    return(
                      
                    <Link href={`/blogs/${item.englishTitle} `} key={item._id}>
                        <p className="block py-2 pr-4 mb-1 hover:bg-purple-200">{item.englishTitle}</p>
                    </Link>
                    )
                    
                  })
                }
            </div>
          </div>
    </>
  )
}
