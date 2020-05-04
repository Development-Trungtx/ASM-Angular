import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from 'angularx-social-login';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterProductComponent} from './footer-product/footer-product.component';
import {HeaderProductHomeComponent} from './header-product-home/header-product-home.component';
import {HomeProductContentComponent} from './home-product-content/home-product-content.component';
import {HeaderProductShopComponent} from './header-product-shop/header-product-shop.component';
import {ShopProductContentComponent} from './shop-product-content/shop-product-content.component';
import {LayoutHomeProductComponent} from './layout-product/layout-home-product/layout-home-product.component';
import {LayoutProductComponent} from './layout-product/layout-product/layout-product.component';
import {LayoutAdminComponent} from './layout-product/layout-admin/layout-admin.component';
import {LoginProductContentComponent} from './login-product-content/login-product-content.component';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminFormComponent} from './admin-form/admin-form.component';
import {AdminTableProductComponent} from './admin-table-product/admin-table-product.component';
import {Page404ProductComponent} from './page404-product/page404-product.component';
import {ServiceService} from './ServiceProduct/service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AdminTypeProductComponent} from './admin-type-product/admin-type-product.component';
import {AdminFormUpdatetComponent} from './admin-form-updatet/admin-form-updatet.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {AuthenticationService} from './ServiceProduct/service/authentication.service';
import {AuthGaurdService} from './ServiceProduct/serviceAPI/auth-gaurd.service';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {BlogProductComponent} from './blog-product/blog-product.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactProductComponent} from './contact-product/contact-product.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {ServiceOrderCartService} from './ServiceProduct/serviceCart/service-order-cart.service';
import {ServiceOrderService} from './ServiceProduct/serviceOrder/service-order.service';
import {AdminOrderComponent} from './admin-order/admin-order.component';
import {AdminOrderUpdateComponent} from './admin-order-update/admin-order-update.component';
import {AdminCartProductComponent} from './admin-cart-product/admin-cart-product.component';
import { UserContentComponent } from './user-content/user-content.component';
import { ClientManagerOrderComponent } from './client-manager-order/client-manager-order.component';
import { ClientManagerCartComponent } from './client-manager-cart/client-manager-cart.component';
import { ClientManagerUserUpdateComponent } from './client-manager-user-update/client-manager-user-update.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1304705546406991')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FooterProductComponent,
    HeaderProductHomeComponent,
    HomeProductContentComponent,
    HeaderProductShopComponent,
    ShopProductContentComponent,
    LayoutHomeProductComponent,
    LayoutProductComponent,
    LayoutAdminComponent,
    LoginProductContentComponent,
    AdminHeaderComponent,
    AdminFormComponent,
    AdminTableProductComponent,
    Page404ProductComponent,
    AdminTypeProductComponent,
    AdminFormUpdatetComponent,
    CartProductComponent,
    LogoutComponent,
    RegisterComponent,
    BlogProductComponent,
    CheckoutComponent,
    ContactProductComponent,
    AdminUsersComponent,
    AdminOrderComponent,
    AdminOrderUpdateComponent,
    AdminCartProductComponent,
    UserContentComponent,
    ClientManagerOrderComponent,
    ClientManagerCartComponent,
    ClientManagerUserUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ServiceService, AuthenticationService, AuthGaurdService, ServiceOrderCartService, ServiceOrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
