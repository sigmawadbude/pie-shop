import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ROUTE_LINKS } from '../app.routes';

@Component({
  selector: 'app-cart',
  imports: [TitleCasePipe, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  ROUTE_LINKS = ROUTE_LINKS;

  items = this.cartService.getItems();
  subtotal = this.cartService.getSubtotal();

  checkout(){
    this.router.navigate([ROUTE_LINKS.CHECKOUT])
  }
}
