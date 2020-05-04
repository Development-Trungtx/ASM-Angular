import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutHomeProductComponent} from './layout-product/layout-home-product/layout-home-product.component';
import {HomeProductContentComponent} from './home-product-content/home-product-content.component';
import {LayoutProductComponent} from './layout-product/layout-product/layout-product.component';
import {ShopProductContentComponent} from './shop-product-content/shop-product-content.component';
import {LoginProductContentComponent} from './login-product-content/login-product-content.component';
import {LayoutAdminComponent} from './layout-product/layout-admin/layout-admin.component';
import {AdminFormComponent} from './admin-form/admin-form.component';
import {AdminTableProductComponent} from './admin-table-product/admin-table-product.component';
import {Page404ProductComponent} from './page404-product/page404-product.component';
import {AdminTypeProductComponent} from './admin-type-product/admin-type-product.component';
import {AdminFormUpdatetComponent} from './admin-form-updatet/admin-form-updatet.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {AuthGaurdService} from './ServiceProduct/serviceAPI/auth-gaurd.service';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ContactProductComponent} from './contact-product/contact-product.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {AdminOrderComponent} from './admin-order/admin-order.component';
import {AdminCartProductComponent} from './admin-cart-product/admin-cart-product.component';
import {UserContentComponent} from './user-content/user-content.component';
import {ClientManagerOrderComponent} from './client-manager-order/client-manager-order.component';
import {ClientManagerCartComponent} from './client-manager-cart/client-manager-cart.component';
import {ClientManagerUserUpdateComponent} from './client-manager-user-update/client-manager-user-update.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutHomeProductComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeProductContentComponent},
    ]
  },
  {
    path: '',
    component: LayoutProductComponent,
    children: [
      {path: 'shop', component: ShopProductContentComponent},
      {path: 'login', component: LoginProductContentComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGaurdService]},
      {path: 'contact', component: ContactProductComponent},
      {path: 'cartProduct', component: CartProductComponent},
      {path: 'userInfo', component: UserContentComponent, canActivate: [AuthGaurdService]},
      {path: 'orderClient/:idOrderPro', component: ClientManagerOrderComponent, canActivate: [AuthGaurdService]},
      {path: 'cartClient/:idCartClient', component: ClientManagerCartComponent, canActivate: [AuthGaurdService]},
      {path: 'updateUser/:idUpdate', component: ClientManagerUserUpdateComponent, canActivate: [AuthGaurdService]},
    ]
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {path: 'table', component: AdminTableProductComponent, canActivate: [AuthGaurdService]},
      {path: 'form', component: AdminFormComponent, canActivate: [AuthGaurdService]},
      {path: 'typePro', component: AdminTypeProductComponent, canActivate: [AuthGaurdService]},
      {path: 'users', component: AdminUsersComponent, canActivate: [AuthGaurdService]},
      {path: 'order', component: AdminOrderComponent, canActivate: [AuthGaurdService]},
      {path: 'cart/:idCart', component: AdminCartProductComponent, canActivate: [AuthGaurdService]},
      {path: 'updatePro/:idPro', component: AdminFormUpdatetComponent, canActivate: [AuthGaurdService]}
    ]
  },
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: 'Error page not found', component: Page404ProductComponent},
  {path: '**', redirectTo: 'Error page not found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
