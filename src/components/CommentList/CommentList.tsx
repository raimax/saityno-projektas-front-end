import Comment from "../Comment/Comment";

interface CommentListProps {
  comments: PostComment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  const RenderComments = () => {
    return comments.map((comment) => {
      return <Comment key={comment.id} comment={comment} />;
    });
  };

  return <div className="comment-list">{RenderComments()}</div>;
};

export default CommentList;
