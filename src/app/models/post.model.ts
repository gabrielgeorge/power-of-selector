import { Comment } from './comment.model';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  specialNumber?: number;
  comments?: Comment[];
}
