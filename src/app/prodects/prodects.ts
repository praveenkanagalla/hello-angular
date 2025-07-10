import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food-service';
import { Foods } from '../shared/models/food';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodects.html',
  styleUrl: './prodects.css'
})
export class Prodects implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }


}
