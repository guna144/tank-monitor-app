import { Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, DoCheck } from '@angular/core';
import * as leaflet from 'leaflet';
import { DataService } from '../../data.service';

@Component({
  selector: 'tank-map',
  templateUrl: './tank-map.component.html',
  styleUrls: ['./tank-map.component.css']
})
export class TankMapComponent implements OnInit {

  public clickedEvent: Event;
  
  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

  value : number;
  liquid_gauge : string = `<div><table class="table table-hover" style="width:100%;">
                            <thead>
                            <tr><th>Tank Id</th><td>2323</td></tr>
                            <tr><th>% of Fuel</th><td>45  %</td></tr>
                            <tr><th>Latitude</th><td>-37.8927369333</td></tr>
                            <tr><th>Longitude{{data}}</th><td>175.4087452333</td></tr></thead>
                            </table></div>`;
  map     : any;
  data    : any[];
  cluster;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.value = 66;
    this.dataService.getData().subscribe(val => {
        this.data = val as string[];        
        this.loadMap();
      });
  }

  loadMap(){
    this.map = leaflet.map('map').fitWorld();

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution : "VissionValley",
      maxZoom     :  17
    }).addTo(this.map);

    /**
     * This is for click on the map then you will get the latitude and longitude 
     */
    this.map.on('click', (e) => { console.log("********** : "+e.latlng); });

    // this.map.on('mousemove',function (event) {
    //   console.log("lat: " + event.latlng.lat + ", long: " + event.latlng.lng);
    // });
    this.map.on('zoomend',function(e){
      console.log(e.sourceTarget._lastCenter.lat);
    });

    this.cluster = leaflet.markerClusterGroup();
    let iconURL  = "./assets/images/oil-empty.png";

    for(let index = 0; index < this.data.length; index++){
      let latLangData = this.data[index];
      let title       = this.liquid_gauge; //"<h1>Test</h1>";//latLangData[2];
      let tankLevel   = latLangData[3];

      if(tankLevel != null && tankLevel != ""){
        if(tankLevel > 0 && tankLevel <= 15) iconURL = "./assets/images/red.png";
        if(tankLevel > 15 && tankLevel <= 30) iconURL = "./assets/images/yellow.png";
        if(tankLevel > 30 ) iconURL = "./assets/images/green.png";
      }else
        iconURL = "./assets/images/oil-empty.png";
      

      let markers      = leaflet.marker(leaflet.latLng(latLangData[0],latLangData[1]),
                         {
                            icon : leaflet.icon({
                              iconUrl    : iconURL,
                              iconSize   :  [25, 41], // size of the icon
                              shadowSize :   [41, 41] // size of the shadow
                            }),
                            title : latLangData[2] // Tool tip tank id
                         });

          markers.bindPopup(title).openPopup();
          this.cluster.addLayer(markers);
          
    }// end for loop
    this.cluster.on('click',function(e){
      console.log("e :: "+e);
    });

     this.map.addLayer(this.cluster);

    //  var gauge;
    //  var ZoomViewer = leaflet.Control.extend({
    //    onAdd: function(){
   
    //      var container = leaflet.DomUtil.create('div');
    //      gauge = leaflet.DomUtil.create('div');
    //      container.style.width = '200px';
    //      container.style.background = 'rgba(255,255,255,0.5)';
    //      container.style.textAlign = 'left';
    //      this.map.on('zoomstart zoom zoomend', function(ev){
    //        gauge.innerHTML = 'Zoom level: ' + this.map.getZoom();
    //      });
    //      container.appendChild(gauge);
   
    //      return container;
    //    }
    //  });
 
    //  (new ZoomViewer).addTo(this.map);
    //  this.map.setView([0, 0], 0);
  }


}
