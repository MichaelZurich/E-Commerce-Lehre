import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CartService} from "../cart/services/cart.service";
import {SharedModule} from "../shared/shared.module";
import {CartModule} from "../cart/cart.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartModule,
  ],
  providers: [
    CartService
  ]
})
export class CoreModule { }
