import React, { RefObject, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./PostPage.scss";
import CommentList from "../../components/CommentList/CommentList";
import { useParams } from "react-router-dom";
import axiosConfig from "../../helpers/axiosConfig";
import { GetLoggedUser, IsAuthed } from "../../helpers/Auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  let { postId } = useParams();
  const commentsElement = useRef() as RefObject<HTMLDivElement>;

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
          console.log(error.response);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const AddLikeToPostAsync = async () => {
    const loggedUser: User | null | undefined = GetLoggedUser();

    if (!IsAuthed()) {
      toast("Must be logged in");
      return;
    }

    if (!loggedUser) return;

    setLoading(true);
    const data: AddLike = {
      userId: loggedUser.id,
      postId: post!.id,
    };

    await axiosConfig
      .post("/likes", data)
      .then((response) => {
        toast(response.data);
        GetPostByIdAsync(postId);
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
    const loggedUser: User | null | undefined = GetLoggedUser();
    if (loggedUser) {
      const data: CommentData = {
        user: {
          id: loggedUser.id,
          username: loggedUser.username,
          roles: loggedUser.roles,
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
            roles: [],
          },
          links: [],
        },
      };
      await axiosConfig
        .post("/comments", data)
        .then((response) => {
          toast(response.data);
          setComment("");
          GetPostByIdAsync(postId);
        })
        .catch((error) => {
          toast(error.response.data);
        })
        .finally();
    }
  };

  useEffect(() => {
    GetPostByIdAsync(postId);
  }, [postId]);

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

          {IsAuthed() ? (
            <>
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
            </>
          ) : null}
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

export default PostPage;
