
import Layout from "@/containers/Layout";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const HomePage = () => {
    
    return ( 
        <Layout>
            <div>
                this is home HomePage
                <Link href="/blogs" ><p>go to blogs</p></Link>
            </div>
        </Layout>
     );
}
 
export default HomePage;