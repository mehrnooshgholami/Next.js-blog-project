import Link from "next/link";

const HomePage = () => {
    return ( 
        <div>
            this is home HomePage
            <Link href="/blogs" ><p>go to blogs</p></Link>
        </div>
     );
}
 
export default HomePage;