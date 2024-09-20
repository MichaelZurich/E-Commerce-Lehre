import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {SharedModule} from "../shared/shared.module";
import {CartComponent} from "./cart.component";



@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartComponent
  ],
  exports: [
    ShoppingCartComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CartModule { }
