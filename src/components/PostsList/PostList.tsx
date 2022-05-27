import PostCard from "../PostCard/PostCard";
import "./PostList.scss";

interface PostsListProps {
  posts: Post[] | null;
}

const PostList = ({ posts }: PostsListProps) => {
  const RenderPosts = () => {
    if (posts === null) return RenderNoPosts();

    return posts?.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });
  };

  const RenderNoPosts = () => {
    return (
      <>
        <img src="/images/no_posts.png" alt="no_posts" />
        <div>No posts</div>
      </>
    );
  };

  return (
    <div className={posts ? "grid-container" : "no-posts"}>{RenderPosts()}</div>
  );
};

export default PostList;
