import { useEffect, useState } from "react";
import PostList from "../../components/PostsList/PostList";
import GenerateMockData from "../../helpers/generateMockPosts";
import "./HomePage.scss";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const posts2: Post[] = GenerateMockData.generatePosts(14);
    setPosts(posts2);
  }, []);

  return (
    <div className="home-page">
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
