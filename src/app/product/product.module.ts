import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {ProductRoutingModule} from "./product-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {ProductComponent} from "./product.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSlider} from "@angular/material/slider";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormField,
    MatInput,
    FormsModule,
    MatSlider,
    MatLabel
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
