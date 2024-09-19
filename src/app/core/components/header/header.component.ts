import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartQuantity.subscribe(quantity => {
      this.totalCartQuantity = quantity;
    });
  }
}
