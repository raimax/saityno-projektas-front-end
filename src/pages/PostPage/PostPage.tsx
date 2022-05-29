import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./PostPage.scss";
import CommentList from "../../components/CommentList/CommentList";
import { useParams } from "react-router-dom";
import axiosConfig from "../../helpers/axiosConfig";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  let { postId } = useParams();

  const GetPostByIdAsync = async (id: string | undefined) => {
		if (id) {
			setLoading(true);
      await axiosConfig
        .get("/posts/" + id)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          toast(error.response);
					console.log(error.response)
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    GetPostByIdAsync(postId);
  }, [postId]);

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
              src={`${process.env.REACT_APP_IMAGE_URL}/${post.image}`}
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="post-page">
      <ToastContainer />
      {RenderPost()}
    </div>
  );
};

export default PostPage;
