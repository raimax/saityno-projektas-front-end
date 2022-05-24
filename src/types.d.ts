type Post = {
  id: number;
  image: string;
  title: string;
  views: number;
	comments: PostComment[]
};

type User = {
	id: number,
	username: string
}

type PostComment = {
	id: number,
	user: User,
	createdAt: string,
	content: string
}