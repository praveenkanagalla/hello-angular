import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        imageUrl: '../../assets/prodect-imgs/green-tea.jpg'
      },
      {
        imageUrl: '../../assets/prodect-imgs/black-coffee.avif'
      },
      {
        imageUrl: '../../assets/prodect-imgs/coffee.avif'
      },
      {
        imageUrl: '../../assets/prodect-imgs/cold-coffee.avif'
      },
      {
        imageUrl: '../../assets/prodect-imgs/ginger-tea.jpg'
      },
      {
        imageUrl: '../../assets/prodect-imgs/leman-tea.jpg'
      },
      {
        imageUrl: '../../assets/prodect-imgs/masala-tea.jpg'
      },
      {
        imageUrl: '../../assets/prodect-imgs/tea.jpg'
      }

    ]
  }
}
