import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AppDashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
