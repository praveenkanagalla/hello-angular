//job.module.ts

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact', component: ContactComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
 })

export class JobModule {
}