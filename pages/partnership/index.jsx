// posts will be populated at build time by getStaticProps()
function Index(props) {
    console.log(props);
    return (
        <div>
            <h1>mamamn</h1>
            <ul>{props.maman}</ul>
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
