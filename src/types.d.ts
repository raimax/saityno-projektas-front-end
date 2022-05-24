type Post = {
  id: number;
  image: string;
  title: string;
  views: number;
  comments: PostComment[];
  likes: Like[];
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
