import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    HeaderBackComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
