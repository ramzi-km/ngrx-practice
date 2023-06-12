import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const addProduct = createAction(
  '[ProductComponent] addProduct',
  props<{ product: Product }>()
);
export const removeProduct = createAction(
  '[ProductComponent] removeProduct',
  props<{ id: string }>()
);
