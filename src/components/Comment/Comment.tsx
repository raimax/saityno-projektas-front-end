import "./Comment.scss";

interface CommentProps {
  comment: PostComment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className="comment">
      <div className="comment_header">
        <div className="comment_header_author">{comment.user.username}</div>
				&bull;
        <div className="comment_header_date">{comment.createdAt}</div>
      </div>
      <div className="comment_content">{comment.content}</div>
    </div>
  );
};

export default Comment;
