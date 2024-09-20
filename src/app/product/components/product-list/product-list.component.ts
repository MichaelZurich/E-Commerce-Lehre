import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges{
  @Input() products: Product[] = [];
  @Input() searchQuery: string = '';
  @Input() minPrice: number | null = null;
  @Input() maxPrice: number | null = null;

  @Output() filteredProducts = new EventEmitter<Product[]>();

  filtered: Product[] = [];

  ngOnChanges(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    this.filtered = this.products.filter(product => {
      const matchesSearchQuery = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesMinPrice = this.minPrice === null || product.price >= this.minPrice;
      const matchesMaxPrice = this.maxPrice === null || product.price <= this.maxPrice;
      return matchesSearchQuery && matchesMinPrice && matchesMaxPrice;
    });

    this.filteredProducts.emit(this.filtered);
  }
}
