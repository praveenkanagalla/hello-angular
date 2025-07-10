//job.module.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";


const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  //   { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class JobModule {
}