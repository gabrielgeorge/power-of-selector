import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { WithoutNgrxComponent } from './without-ngrx/without-ngrx.component';
import { CardComponent } from './card/card.component';
import { DisplayResultComponent } from './display-result/display-result.component';

@NgModule({
  declarations: [AppComponent, WithoutNgrxComponent, CardComponent, DisplayResultComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
