import Link from "next/link" 


const CategoryMobile = ({category}) => {
    return(
        <>
            <div className="flex md:hidden gap-x-4 overflow-auto pb-5">
                {
                category.data.map((item)=>{
                    return(
                    
                    <Link href={`/blogs/${item.englishTitle} `} key={item._id}>
                    <p className="block border border-grey-400 bg-white rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap text-sm">{item.englishTitle}</p>
                    </Link>
                    )
                    
                })
                }
            </div>
        </>
    );
}

export default CategoryMobile