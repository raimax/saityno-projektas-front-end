import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import PostList from "../../components/PostsList/PostList";
import axiosConfig from "../../helpers/axiosConfig";
import "./HomePage.scss";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const GetPostsAsync = async () => {
    setLoading(true);
    await axiosConfig
      .get("/posts")
      .then((response) => {
        if (response?.data?.length) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    GetPostsAsync();
  }, []);

	if (loading) {
		return <Loader />
	}

  return (
    <div className="home-page">
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
