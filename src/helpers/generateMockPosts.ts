export default class GenerateMockData {
  static generatePosts(amount: number) {
    const posts: Post[] = [];
    for (let i = 0; i < amount; i++) {
      let x: number = 250 * Math.floor(Math.random() * (5 - 2 + 2) + 2);
      let y: number = 270 * Math.floor(Math.random() * (5 - 2 + 2) + 2);
      let post3: Post = {
        id: i + 1,
        image: `https://picsum.photos/${x}/${y}`,
        title: "random" + i,
        views: 0,
        comments: this.generateComments(5),
        likes: [],
        user: {
          id: 0,
          username: "",
        },
      };
      posts.push(post3);
    }
    return posts;
  }

  static generatePost() {
    let x: number = 300 * Math.floor(Math.random() * (5 - 2 + 2) + 2);
    let y: number = 270 * Math.floor(Math.random() * (5 - 2 + 2) + 2);
    let post: Post = {
      id: 9999,
      image: `https://picsum.photos/${x}/${y}`,
      title: "random title",
      views: 0,
      comments: this.generateComments(5),
      likes: [],
      user: {
        id: 0,
        username: "",
      },
    };

    return post;
  }

  static generateComments(amount: number) {
    const comments: PostComment[] = [];
    for (let i = 0; i < amount; i++) {
      let comment: PostComment = {
        id: i + 1,
        user: {
          id: i + 1,
          username: "random" + (i + 1),
        },
        createdAt: new Date().toLocaleDateString(),
        content: "this is a comment " + (i + 1),
      };
      comments.push(comment);
    }
    return comments;
  }
}
