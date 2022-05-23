import React, { useEffect, useState } from "react";
import PostList from "../components/PostsList/PostList";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    let x: number = Math.floor(300 * (3 - 1 + 1) + 1);
    let y: number = Math.floor(300 * (3 - 1 + 1) + 1);
    const posts2: Post[] = [];
    let post4: Post = {
      id: 463,
      image: "https://api.lorem.space/image?w=400&h=600",
      title: "random",
      views: 0,
    };
    for (let i = 0; i < 26; i++) {
      let post3: Post = {
        id: i + 1,
        image: `https://picsum.photos/${x}/${y}`,
        title: "random" + i,
        views: 0,
      };
      posts2.push(post3);
      if (i % 3 === 0) {
        posts2.push(post4);
      }
    }
    setPosts(posts2);
  }, []);

  return <PostList posts={posts} />;
};

export default HomePage;
