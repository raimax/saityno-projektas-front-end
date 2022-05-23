import PostCard from "../PostCard/PostCard";
import "./PostList.scss";

interface PostsListProps {
  posts: Post[] | null;
}

const PostList = ({ posts }: PostsListProps) => {
  const RenderPosts = () => {
    if (posts === null) return <div>No posts</div>;

    return posts?.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });
  };

  return <div className="grid-container">{RenderPosts()}</div>;
};

export default PostList;
