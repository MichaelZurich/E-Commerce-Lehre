import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product.model';
import { PRODUCTS } from '../../data/product.data';
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product = PRODUCTS.find(product => product.id === productId);
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.addToCartEvent.emit(this.product);
    }
  }
}
