import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product.model";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

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
  gridCols: number = 3;

  @Output() filteredProducts = new EventEmitter<Product[]>();

  filtered: Product[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnChanges(): void {
    this.filterProducts();
    this.setGridColumns();
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

  setGridColumns(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          this.gridCols = 1;
        } else if (result.breakpoints[Breakpoints.TabletPortrait]) {
          this.gridCols = 2;
        } else {
          this.gridCols = 3;
        }
      }
    });
  }
}
