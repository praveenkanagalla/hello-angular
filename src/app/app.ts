import { Component, HOST_TAG_NAME } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { About } from './about/about';
// import { Search } from './search/search';
// import { }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected title = 'hello-angular';
}
