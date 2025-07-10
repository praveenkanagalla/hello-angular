import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  // all products storing here...
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Green Tea',
        price: 40,
        makingTime: '5mints',
        favorite: true,
        // stars: 4.5,
        imageUrl: '../../assets/prodect-imgs/green-tea.jpg'
      },
      {
        id: 2,
        name: 'Black Coffee',
        price: 30,
        makingTime: '3mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/black-coffee.avif'
      },
      {
        id: 3,
        name: 'Coffee',
        price: 30,
        makingTime: '5mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/coffee.avif'
      },
      {
        id: 4,
        name: 'Cold Coffee',
        price: 50,
        makingTime: '5-10mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/cold-coffee.avif'
      },
      {
        id: 5,
        name: 'Ginger Tea',
        price: 30,
        makingTime: '5-10mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/ginger-tea.jpg'
      },
      {
        id: 6,
        name: 'Leman Tea',
        price: 30,
        makingTime: '5mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/leman-tea.jpg'
      },
      {
        id: 7,
        name: 'Masala Tea',
        price: 30,
        makingTime: '5-10mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/masala-tea.jpg'
      },
      {
        id: 8,
        name: 'Tea',
        price: 20,
        makingTime: '5mints',
        favorite: true,
        imageUrl: '../../assets/prodect-imgs/tea.jpg'
      }

    ]
  }
}
