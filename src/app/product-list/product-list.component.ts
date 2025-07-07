import { Component, inject } from '@angular/core';
import { products, Product } from '../models/product';
import { CartService } from '../services/cart.service';
//import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
private cartService = inject(CartService);
  //private toastr = inject(ToastrService);
  
  products = products;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
   // this.toastr.success(product.name + ' was added to the cart.', 'You Did It!'); 
  }
}
