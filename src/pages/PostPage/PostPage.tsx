import { useEffect, useState } from "react";
import GenerateMockData from "../../helpers/generateMockPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./PostPage.scss";
import CommentList from "../../components/CommentList/CommentList";

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const post: Post = GenerateMockData.generatePost();
    setPost(post);
  }, []);

  const RenderPost = () => {
    if (post === null) return <div>No post found</div>;

    return (
      <div className="post-container">
        <div className="post-sidebar">
          <FontAwesomeIcon icon={faHeart} className="post-sidebar_heart" />
          {post.views}
          <FontAwesomeIcon icon={faComment} className="post-sidebar_comment" />
          {post.views}
        </div>
        <div className="post-content">
          <div className="post-content_title">{post.title}</div>
          <div className="post-content_author">by author</div>
          <div className="post-content_image_container">
            <img
              className="post-content_image"
              src={`${post.image}`}
              alt="ef"
            />
          </div>
          <div className="comment-container">
            <textarea placeholder="Leave a comment" className="comment-box" />
            <div className="comment-container_footer">
              <button className="post-button" type="button">
                Post
              </button>
            </div>
          </div>
          <div className="comments-title">
            <span className="comments-title_count">{post.comments.length}</span>
            COMMENTS
          </div>
          <CommentList comments={post.comments} />
        </div>
      </div>
    );
  };

  return <div className="post-page">{RenderPost()}</div>;
};

export default PostPage;
