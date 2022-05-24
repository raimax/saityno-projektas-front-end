import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./PostCard.scss";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link to={"/posts/" + post.id.toString()}>
      <div className="post-card">
        <img
          className="post-card_image"
          src={post.image}
          alt={post.id.toString()}
        />
        <div className="post-card_content">
          <div className="post-card_content_title">{post.title}</div>
          <div className="post-card_content_info">
            <div className="info-icon">
              <FontAwesomeIcon icon={faHeart} />
              {post.views}
            </div>
            <div className="info-icon">
              <FontAwesomeIcon icon={faEye} />
              {post.views}
            </div>
            <div className="info-icon">
              <FontAwesomeIcon icon={faComment} />
              {post.views}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
