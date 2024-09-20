import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product.model";
import {PRODUCTS} from "./data/product.data";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = PRODUCTS;
    this.filteredProducts = [...this.products];
  }

  updateFilteredProducts(filtered: Product[]): void {
    this.filteredProducts = filtered;
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.filteredProducts = [...this.products];
  }

}
