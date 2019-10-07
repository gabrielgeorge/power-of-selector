import { Component } from '@angular/core';
import { DataFetcherService } from './services/data-fetcher.service';
import { tap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'power-of-selector';

  withoutNgrxResults = [];

  addWithoutNgrxResult(time: number) {
    this.withoutNgrxResults.push(time);
  }
}
