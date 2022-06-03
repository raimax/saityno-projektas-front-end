type Post = {
  id: number;
  title: string;
  image: string;
  views: number;
  comments: PostComment[];
  likes: Like[];
  user: User;
  links: PostLink[];
};

type PostLink = {
  rel: string;
  href: string;
};

type NewPost = {
  title: string;
  imageFile: any;
  user: User;
};

type AddLike = {
  userId: number;
  postId: number;
};

type Like = {
  id: number;
  user: User;
};

type User = {
  id: number;
  username: string;
};

type PostComment = {
  id: number;
  user: User;
  createdAt: string;
  content: string;
};

type CommentData = {
  post: Post;
  user: User;
  content: string;
};
