import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product.model";
import {PRODUCTS} from "../../data/product.data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = PRODUCTS;
  }
}
