import Head from "next/head";

const SEO = ({post}) => {
    return ( 
    <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.text} />
    </Head>    
    );
}
 
export default SEO;