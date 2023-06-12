import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { productState } from 'src/app/state/product/product.selectors';
import * as ProductActions from '../../state/product/product.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products$ = this.store.select(productState);
  constructor(private store: Store<{ products: ReadonlyArray<Product> }>) {}
  addProduct() {
    const rnd = Date.now().toString();
    const product: Product = { id: rnd, name: 'product' + rnd, price: 100 };
    this.store.dispatch(ProductActions.addProduct({ product }));
  }
  removeProduct(id: string) {
    this.store.dispatch(ProductActions.removeProduct({ id }));
  }
}
