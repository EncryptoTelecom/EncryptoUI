import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../components/not-found/not-found.component';
import { AddressBookComponent } from 'app/components/address-book/address-book.component';
import { MarketplaceComponent } from '../components/marketplace/marketplace.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'cabinet', pathMatch: 'full' },
  { path: 'cabinet', children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'address-book', component: AddressBookComponent },
    { path: 'marketplace', component: MarketplaceComponent },
  ]},
  { path: '**', component: PageNotFoundComponent },
];

export const EncryptoTel = RouterModule.forRoot(appRoutes, {  });
