import { CategoryDesktop } from "@/components/posts/CategoryDesktop";
import CategoryMobile from "@/components/posts/CategoryMobile";
import PostList from "@/components/posts/PostList";
import { SortBar } from "@/components/posts/SortBar";
import Layout from "@/containers/Layout";
import axios from "axios";


const HomePage = ({blogsData,category}) => {
  return (
    <Layout>
   <div className="bg-gray-50">
    <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
    <CategoryMobile category={category} />
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)]">
        <div className="hidden md:block md:row-span-2 md:col-span-3">
          <CategoryDesktop category={category} />
        </div>
        <div className="hidden md:block md:col-span-9">
          <SortBar />
        </div>
        <div className="md:col-span-9 grid grid-cols-6 gap-8">
          <PostList data={blogsData.docs}/>
        </div>
      </div>
    </div>
   </div>
   </Layout>
  );
};

export default HomePage;

export async function getServerSideProps(Context) {
  const {data : result} = await axios.get("http://localhost:5000/api/posts")
  const {data}=result
  const {data:category} = await axios.get("http://localhost:5000/api/post-category")
    return{
      props:{
        blogsData:data,
        category
      }
    }
}