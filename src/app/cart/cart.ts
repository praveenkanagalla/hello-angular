import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food'; // ✅ Assuming this is an array of food objects

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  foods = Foods; // ✅ Make sure Foods is correctly imported and is an array
}
