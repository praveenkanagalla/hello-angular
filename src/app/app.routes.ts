import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { CheckoutComponent } from './checkout/checkout';
import { Prodects } from './prodects/prodects';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'prodects', component: Prodects }
];
