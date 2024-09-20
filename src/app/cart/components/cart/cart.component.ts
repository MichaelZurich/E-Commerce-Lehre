import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cart} from "../../model/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotalPrice();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalPrice() {
    this.cartService.cartTotalPrice.subscribe(price => {
      this.totalPrice = price;
    });
  }

  removeFromCart(item: Cart, event: Event): void {
    event.stopPropagation()
    this.cartService.removeFromCart(item.product);
    this.loadCartItems();
  }
}
