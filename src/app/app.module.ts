import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ShopComponent } from './shop/shop.component';
import { SingleComponent } from './single/single.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'about-cr-sadler',
    component: HomeComponent,
    redirectTo: ''
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: { title: 'Shop' }
  },
  {
    path: 'shop/:category',
    component: CategoryComponent,
    data: { title: 'Shop Category' }
  },
  {
    path: 'shop/:category/:id',
    component: SingleComponent,
    data: { title: 'Shop Details' }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Shop Cart' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoryComponent,
    ShopComponent,
    SingleComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
