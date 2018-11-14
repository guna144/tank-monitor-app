import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  navbarToggleValue: boolean;
  sidebarToggleValue: boolean;
  sidebarMiniToggleValue: boolean;

  constructor() {
    this.navbarToggleValue = true;
    this.sidebarToggleValue = false;
    this.sidebarMiniToggleValue = false;
  }

  sidebarToggle(): void {
    this.sidebarToggleValue = !this.sidebarToggleValue;
  }

  sidebarMiniToggle(): void {
    this.sidebarMiniToggleValue = !this.sidebarMiniToggleValue;
  }

  navbarToggle(): void {
    this.navbarToggleValue = !this.navbarToggleValue;
  }

}
