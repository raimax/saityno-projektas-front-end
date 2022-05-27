type Post = {
  id: number;
  title: string;
  image: string;
  views: number;
  comments: PostComment[];
  likes: Like[];
};

type NewPost = {
  title: string;
  imageFile: any;
  user: User;
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
