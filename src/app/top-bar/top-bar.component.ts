import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ROUTE_LINKS } from '../app.routes';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  cart = inject(CartService);
  ROUTE_LINKS = ROUTE_LINKS;
  

  cartCount = this.cart.cartCount;
}
