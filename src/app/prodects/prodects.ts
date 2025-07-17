import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../services/food-service';
import { Foods } from '../shared/models/food';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-prodects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodects.html',
  styleUrls: ['./prodects.css'] // ✅ Corrected from `styleUrl`
})
export class Prodects implements OnInit {

  @Input() products: Foods[] = [];

  searchTerm: string = ''; // ✅ Holds search input value

  constructor(private fs: FoodService, private cartService: CartService) { } // ✅ Saved cartService as class property

  ngOnInit(): void {
    this.products = this.fs.getAll(); // ✅ Fixed typo: changed `this.prodects` to `this.products`
  }

  addToCart(product: Foods) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
}
