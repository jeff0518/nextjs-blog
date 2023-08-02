import Head from "next/head";
import Hero from "@/components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/postsUtil";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Jeff' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
