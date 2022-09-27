import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin.component'
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CoinService } from '../app-layout/service/coin.service';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {SkeletonModule} from 'primeng/skeleton';
@NgModule({
  declarations: [
    CoinComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    TableModule,
    ButtonModule,
    StyleClassModule,
    PanelMenuModule,
    HttpClientModule,
    PaginatorModule,
    VirtualScrollerModule,
    TabViewModule,
    ToastModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    SkeletonModule

  ],
  providers:[CoinService],
  exports: [CoinComponent ]
})
export class CoinModule { }
