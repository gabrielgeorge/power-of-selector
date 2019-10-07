import { User, Post, Todo, Comment } from '../models';

export function UserDataMapper({
  users,
  posts,
  comments,
  todos
}: {
  users: User[];
  posts: Post[];
  comments: Comment[];
  todos: Todo[];
}): User[] {
  const specialNumberGenerator = (count = 100000): number => {
    let pi = 0;
    const it = sequence();

    for (let i = 0; i < count; i++) {
      pi += 4 / (it.next().value as number);
      pi -= 4 / (it.next().value as number);
    }

    function* sequence() {
      let i = 1;
      while (true) {
        yield i;
        i += 2;
      }
    }

    return pi;
  };

  posts.forEach(post => {
    post.comments = comments.filter(x => x.postId === post.id);
    post.specialNumber = specialNumberGenerator();
  });

  users.forEach(user => {
    user.posts = posts.filter(x => x.userId === user.id);
    user.todos = todos.filter(x => x.userId === user.id);
  });

  return users;
}
