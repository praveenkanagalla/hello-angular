import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuVariable: boolean = false;
  openMenu() {
    this.menuVariable = true;
    console.log("Open Menu...");
  }
  closeMenu() {
    this.menuVariable = false;
    console.log("Close Menu...");
  }

}
