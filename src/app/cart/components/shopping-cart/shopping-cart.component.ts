import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cart} from "../../model/cart.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  @Input() cartItems: Cart[] = [];
  @Input() totalPrice: number = 0;
  @Output() itemRemoved = new EventEmitter<{ item: Cart, event: Event }>();

  constructor() {}

  removeFromCart(item: Cart, event: Event): void {
    this.itemRemoved.emit({ item, event });
  }
}
