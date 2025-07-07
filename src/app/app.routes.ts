import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';

export enum ROUTE_LINKS {
    SHOP ='shop',
    CONTACT = 'contact'
}
export const routes: Routes = [
    { path: '', redirectTo: ROUTE_LINKS.SHOP, pathMatch: 'full' },
    { path: ROUTE_LINKS.SHOP, component: ProductListComponent },
    { path: ROUTE_LINKS.CONTACT, component: ContactComponent },
];
