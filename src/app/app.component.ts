import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(){}

  ngOnInit(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $("#menu-toggle").toggleClass("change");
    });
  }

  myFunction(obj) {
    obj.classList.toggle("change");
  }

}
