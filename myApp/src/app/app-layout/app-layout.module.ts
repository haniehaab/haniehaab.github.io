import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from "./app-layout.component";
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppMenuComponent } from './app-sidebar/app-menu/app-menu.component';
import { AppMenuitemComponent } from './app-sidebar/app-menu/app-menuitem/app-menuitem.component';

@NgModule({
    declarations: [
    
        AppLayoutComponent,
        AppToolbarComponent,
        AppSidebarComponent,
        AppMenuComponent,
        AppMenuitemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule
    ],
    exports: [AppLayoutComponent, AppToolbarComponent,AppSidebarComponent ]
})
export class AppLayoutModule { }
