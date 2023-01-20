import AppContext from "../../Components/AppContext";
import { useContext } from "react";
import Link from "next/link";

function Index(props) {
    const context = useContext(AppContext);

    console.log(props);
    return (
        <div>
            <h1>{context.nameContext}</h1>
            <Link href={"/LandingPage"} passHref>
                Landing Page
            </Link>
            <h1>mamamn</h1>
        </div>
    );
}

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const posts = process.env.MAMAN;
    console.log(process.env.MAMAN);

    // By returning { props: { posts } }, the Index component
    // will receive `posts` as a prop at build time
    return {
        props: {
            maman: posts,
        },
    };
}

export default Index;
