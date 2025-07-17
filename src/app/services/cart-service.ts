import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: any) {
    const index = this.cartItems.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartSubject.next(this.cartItems);
  }

  updateQuantity(index: number, change: number) {
    this.cartItems[index].quantity += change;
    if (this.cartItems[index].quantity <= 0) {
      this.removeFromCart(index);
    } else {
      this.cartSubject.next(this.cartItems);
    }
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
}
