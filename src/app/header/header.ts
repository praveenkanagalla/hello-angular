import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterModule],
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
  Menu() {
    console.log("About...")
  }

}
