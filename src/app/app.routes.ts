import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home }, // Default route
    // { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
    // { path: '**', component: NotFoundComponent }
];
