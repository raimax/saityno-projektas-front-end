import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
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
            <FontAwesomeIcon icon={faEye} />
            {post.views}
          </div>
          <div className="info-icon">
            <FontAwesomeIcon icon={faEye} />
            {post.views}
          </div>
          <div className="info-icon">
            <FontAwesomeIcon icon={faEye} />
            {post.views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
