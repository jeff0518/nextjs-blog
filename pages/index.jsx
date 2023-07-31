import Hero from "@/components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/postsUtil";

// const DUMMY_POSTS = [
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2023-07-05",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2023-07-05",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2023-07-05",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2023-07-05",
//     slug: "getting-started-with-nextjs4",
//   },
// ];

function HomePage(props) {
  return (
    <>
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
