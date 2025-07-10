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

  // foods all items in one array...
  prodects: Foods[] = [];

  // food service including here...
  constructor(private fs: FoodService) { }

  // foods all items getting here...
  ngOnInit(): void {
    this.prodects = this.fs.getAll();
  }


}
