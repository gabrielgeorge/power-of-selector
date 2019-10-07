import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User, Todo, Comment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getAllPost$() {
    return this.httpClient.get<Post[]>(`${this.URL}/posts`);
  }

  getPost$(postId: string) {
    return this.httpClient.get<Post>(`${this.URL}/posts/${postId}`);
  }

  getAllUser$() {
    return this.httpClient.get<User[]>(`${this.URL}/users`);
  }

  getUser$(userId: string) {
    return this.httpClient.get<User>(`${this.URL}/users/${userId}`);
  }

  getAllComments$() {
    return this.httpClient.get<Comment[]>(`${this.URL}/comments`);
  }

  getCommentsForPost$(postId: string) {
    return this.httpClient.get<Comment>(
      `${this.URL}/comments?postId=${postId}`
    );
  }

  getAllTodosForAllUsers$() {
    return this.httpClient.get<Todo[]>(`${this.URL}/todos`);
  }

  getAllTodosForUser$(userId: string) {
    return this.httpClient.get<Todo>(`${this.URL}/todos?userId=${userId}`);
  }
}
