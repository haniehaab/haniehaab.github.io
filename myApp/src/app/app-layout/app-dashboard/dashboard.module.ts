import { NgModule } from '@angular/core';
import { AppDashboardComponent } from './app-dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import {CoinModule} from '../../coin/coin.module'

@NgModule({ 
    imports: [
        DashboardsRoutingModule,
        CoinModule,
    ],
    declarations: [AppDashboardComponent],
    providers:[]
})
export class DashboardModule { }
