import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
  }

}
