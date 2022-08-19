import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RxjsService } from './services/rxjs.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RxjsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
