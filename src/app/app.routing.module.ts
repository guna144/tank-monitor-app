import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TankMapComponent } from './geomap/tank-map/tank-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartBoardComponent } from './charts/chart-board/chart-board.component';
import { MapTableComponent } from './geomap/map-table/map-table.component';
import { LiquidFillGaugeComponent } from './geomap/liquid-fill-gauge/liquid-fill-gauge.component';

@NgModule({
    declarations: [ 
        TankMapComponent, DashboardComponent, MapTableComponent, LiquidFillGaugeComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot([
      //  { path: 'login', component:  },
        { path: 'home', component: DashboardComponent },
        { path: 'map', component: TankMapComponent },
        { path: 'chart', component: ChartBoardComponent },

        { path: 'events', component: DashboardComponent },
        { path: 'about', component: DashboardComponent },
        { path: 'services', component: DashboardComponent },
        { path: 'contact', component: DashboardComponent },
        { path: '**', redirectTo: 'home' }
      ])
    ],
    exports: [
      RouterModule
    ],
    providers: [],
  
  })
  export class AppRoutingModule {}