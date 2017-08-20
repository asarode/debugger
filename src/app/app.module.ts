import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FlippyComponent, MessagerComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FlippyComponent,
    MessagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
