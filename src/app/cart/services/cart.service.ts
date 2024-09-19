import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Cart} from "../model/cart.model";
import {Product} from "../../product/model/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Cart[] = [];

  private cartQuantitySubject = new BehaviorSubject<number>(0);
  private cartTotalPriceSubject = new BehaviorSubject<number>(0);

  cartQuantity = this.cartQuantitySubject.asObservable();
  cartTotalPrice = this.cartTotalPriceSubject.asObservable();

  addToCart(product: Product): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.cartQuantitySubject.next(this.getTotalQuantity());
    this.cartTotalPriceSubject.next(this.getTotalPrice());
  }

  removeFromCart(product: Product): void {
    const cartItem = this.cartItems.find(item => item.product.id === product.id);

    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
      }
    }

    this.cartQuantitySubject.next(this.getTotalQuantity());
    this.cartTotalPriceSubject.next(this.getTotalPrice());
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  getCartItems(): Cart[] {
    return this.cartItems;
  }
}
