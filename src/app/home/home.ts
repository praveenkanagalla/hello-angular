import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Prodects } from "../prodects/prodects";
import { Search } from '../search/search';

@Component({
  selector: 'app-home',
  imports: [Carousel, Prodects, Search],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
