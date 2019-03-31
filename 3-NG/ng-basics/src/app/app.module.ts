import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Greeting } from './greeting.component';
import { ActionBoxComponent } from './action-box/action-box.component';
import { ActionComponent } from './action/action.component';
import { ActionSummaryComponent } from './action-summary/action-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    Greeting,
    ActionBoxComponent,
    ActionComponent,
    ActionSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
