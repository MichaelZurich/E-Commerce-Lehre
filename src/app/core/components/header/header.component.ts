import {Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../../cart/services/cart.service";
import {MatMenuTrigger, MenuCloseReason} from "@angular/material/menu";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger | undefined;
  totalCartQuantity: number = 0;

  constructor(private cartService: CartService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.cartService.cartQuantity.subscribe(quantity => {
      this.totalCartQuantity = quantity;
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
