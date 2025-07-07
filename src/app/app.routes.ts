import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export enum ROUTE_LINKS {
    SHOP ='shop',
    CONTACT = 'contact',
    CART = 'cart',
    CHECKOUT = 'checkout'
}
export const routes: Routes = [
    { path: '', redirectTo: ROUTE_LINKS.SHOP, pathMatch: 'full' },
    { path: ROUTE_LINKS.SHOP, component: ProductListComponent },
    { path: ROUTE_LINKS.CONTACT, component: ContactComponent },
    { path: ROUTE_LINKS.CART, component: CartComponent },
    { path: ROUTE_LINKS.CHECKOUT, component: CheckoutComponent },
];
