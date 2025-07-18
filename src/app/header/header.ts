import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterModule, CommonModule],
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

  cartCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.reduce((count, item) => count + item.quantity, 0);
    });
  }

}
