import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { AppToolbarComponent } from './app-layout/app-toolbar/app-toolbar.component';
import { AppLayoutModule } from './app-layout/app-layout.module';
@NgModule({ 
  declarations: [ 
    AppComponent
    //AppToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
