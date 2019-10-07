import { Component, Output, EventEmitter } from '@angular/core';
import { DataFetcherService } from '../services/data-fetcher.service';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserDataMapper } from '../utils/user-data-mapper.util';

@Component({
  selector: 'app-without-ngrx',
  templateUrl: './without-ngrx.component.html',
  styleUrls: ['./without-ngrx.component.scss']
})
export class WithoutNgrxComponent {
  @Output() timeTaken = new EventEmitter<number>();
  constructor(private df: DataFetcherService) {}

  private start: Date;

  fetchData() {
    combineLatest([
      this.df.getAllUser$(),
      this.df.getAllPost$(),
      this.df.getAllComments$(),
      this.df.getAllTodosForAllUsers$()
    ])
      .pipe(
        tap(() => {
          this.start = new Date();
        }),
        map(([users, posts, comments, todos]) => {
          return UserDataMapper({ users, posts, comments, todos });
        })
      )
      .subscribe(() => {
        this.timeTaken.emit(new Date().getTime() - this.start.getTime());
      });
  }
}
