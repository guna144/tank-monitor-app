import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'map-table',
  templateUrl: './map-table.component.html',
  styleUrls: ['./map-table.component.css']
})
export class MapTableComponent implements OnInit {

  public searchText : string;
  
  @Output() eventClicked = new EventEmitter<Event>();

  onClick(event: Event): void {
    console.log("event : "+event);
    this.eventClicked.emit(event);
  }

  charData : {
    "characters": [
    {
        "id": "1",
        "name": "Peter Dinklage",
        "age": "45"
    },
    {
        "id": "2",
        "name": "Lina Heady",
        "age": "43"
    },
    {
        "id": "3",
        "name": "Emilia Clarke",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "5",
        "name": "Sean Bean",
        "age": "50"
    }]
};
  data : any;
  val : string;
  constructor(private _dataService : DataService) {
    this.val  = "Hello";
  }

  ngOnInit() {
    
    this._dataService.getData().subscribe(val => {
      this.data = val as string[];      
      //console.log(this.data[2]);        
    });
    
  }

}
