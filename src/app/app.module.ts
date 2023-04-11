import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HelloComponent} from './hello/hello.component'
import { FormsModule } from '@angular/forms';

import { UpperCapitalPipe } from './hello/upper-capital-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
