import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TopNavComponent } from './components/layouts/top-nav/top-nav.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { counterReducer } from './state/counter/counter.reducer';
import { productReducer } from './state/product/product.reducer';
import { userEffects } from './state/user/user.effects';
import { userReducer } from './state/user/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TopNavComponent,
    ProductComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      products: productReducer,
      userState: userReducer,
    }),
    NgbModule,
    EffectsModule.forRoot([userEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
