import { AdjustmentsIcon } from '@heroicons/react/outline'

export const SortBar = () => {
  return (
    <>
        <div className="bg-white rounded-3xl px-4">
            <div className="flex gap-x-2 items-center">
              <AdjustmentsIcon className="w-6 h-6"/>
              <span>مرتب سازی</span>
              <ul className="flex items-center gap-x-4">
                <li className="cursor-pointer py-4">پر بازدید ترین</li>
                <li className="cursor-pointer py-4">محبوب ترین</li>
                <li className="cursor-pointer py-4">جدید ترین</li>  
              </ul>
            </div>
          </div>
    </>
  )
}
