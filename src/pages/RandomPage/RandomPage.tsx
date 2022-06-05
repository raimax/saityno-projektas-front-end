import { faComment, faHeart, faDice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RefObject, useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CommentList from "../../components/CommentList/CommentList";
import Loader from "../../components/Loader/Loader";
import axiosConfig from "../../helpers/axiosConfig";
import "../PostPage/PostPage.scss";

const RandomPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const commentsElement = useRef() as RefObject<HTMLDivElement>;

  const GetPostByIdAsync = async (id: string | undefined) => {
    if (id) {
      console.log("fetched");
      setLoading(true);
      await axiosConfig
        .get("/posts/" + id)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          toast(error.response);
          console.log(error.response);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const GetRandomPost = async () => {
    setLoading(true);
    await axiosConfig
      .get("/posts/random")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        toast(error.response);
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const AddLikeToPostAsync = async () => {
    setLoading(true);
    const data: AddLike = {
      userId: 1,
      postId: post!.id,
    };

    await axiosConfig
      .post("/likes", data)
      .then((response) => {
        toast(response.data);
        GetPostByIdAsync(post!.id.toString());
      })
      .catch((error) => {
        toast(error.response.data);
        console.log(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const OnCommentIconClick = () => {
    commentsElement.current?.scrollIntoView();
  };

  const AddCommentAsync = async () => {
    const data: CommentData = {
      user: {
        id: 1,
        username: "admin",
				roles: []
      },
      content: comment,
      post: {
        id: post!.id,
        title: "",
        image: "",
        views: 0,
        comments: [],
        likes: [],
        user: {
          id: 0,
          username: "",
					roles: []
        },
				links: []
      },
    };
    await axiosConfig
      .post("/comments", data)
      .then((response) => {
        toast(response.data);
        setComment("");
        GetPostByIdAsync(post!.id.toString());
      })
      .catch((error) => {
        toast(error.response.data);
      })
      .finally();
  };

  useEffect(() => {
    GetRandomPost();
  }, []);

  const RenderPost = () => {
    if (post === null)
      return <div style={{ textAlign: "center" }}>No post found</div>;

    return (
      <div className="post-container">
        <div className="post-sidebar">
          <FontAwesomeIcon
            icon={faHeart}
            className="post-sidebar_heart"
            onClick={AddLikeToPostAsync}
          />
          <span>{post?.likes?.length}</span>
          <FontAwesomeIcon
            onClick={OnCommentIconClick}
            icon={faComment}
            className="post-sidebar_comment"
          />
          <span>{post?.comments?.length}</span>
					<FontAwesomeIcon
            onClick={GetRandomPost}
            icon={faDice}
            className="post-sidebar_comment"
          />
        </div>
        <div className="post-content">
          <div className="post-content_title">{post.title}</div>
          <div className="post-content_author">by {post.user.username}</div>
          <div className="post-content_image_container">
            <img
              className="post-content_image"
              src={`${process.env.REACT_APP_IMAGE_URL}/${post.image}`}
              alt="ef"
            />
          </div>
          <div className="comment-container">
            <textarea
              onChange={(event) => setComment(event.currentTarget.value)}
              value={comment}
              placeholder="Leave a comment"
              className="comment-box"
            />
            <div className="comment-container_footer">
              <button
                onClick={AddCommentAsync}
                className="post-button"
                type="button"
              >
                Post
              </button>
            </div>
          </div>
          <div className="comments-title" ref={commentsElement}>
            <span className="comments-title_count">{post.comments.length}</span>
            COMMENTS
          </div>
          <CommentList comments={post.comments} />
        </div>
      </div>
    );
  };

  return (
    <div className="post-page">
      <Loader isLoading={loading} />
      <ToastContainer theme="dark" />
      {RenderPost()}
    </div>
  );
};

export default RandomPage;
