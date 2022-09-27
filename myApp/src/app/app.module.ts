import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
//import { AppToolbarComponent } from './app-layout/app-toolbar/app-toolbar.component';
import { AppLayoutModule } from './app-layout/app-layout.module';
//import { CoinComponent } from './coin/coin.component';


@NgModule({ 
  declarations: [ 
    AppComponent
    //, CoinComponent,
  //  AppToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
   // CommonModule,
    AppRoutingModule,
    AppLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
