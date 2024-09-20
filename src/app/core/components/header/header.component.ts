import {Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../../cart/services/cart.service";
import {MatMenuTrigger, MenuCloseReason} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger | undefined;
  totalCartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartQuantity.subscribe(quantity => {
      this.totalCartQuantity = quantity;
    });
  }
}
