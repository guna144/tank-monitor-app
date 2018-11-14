import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SidebarMenuComponent } from './dashboard/sidebar-menu/sidebar-menu.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
// import { TankMapComponent } from './geomap/tank-map/tank-map.component';
import { DataService } from './data.service';
import { ChartBoardComponent } from './charts/chart-board/chart-board.component';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { FilterPipe } from './geomap/_pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    ChartBoardComponent,
    AreaChartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, LeafletMarkerClusterModule , HttpClientModule,
     FormsModule, AppRoutingModule
  ],
 
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
