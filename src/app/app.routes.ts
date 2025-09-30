import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStoreAddressComponent } from './components/edit-store-address/edit-store-address.component';

export const routes: Routes = [
    { path: '', component: Home }, // Default route
    { path: 'dashboard', component: DashboardComponent },
    { path: 'editAddress', component: EditStoreAddressComponent },
    // { path: '**', component: NotFoundComponent }
];
