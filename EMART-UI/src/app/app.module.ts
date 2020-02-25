import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerLandingPageComponent } from './SELLER/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './SELLER/add-items/add-items.component';
import { ViewItemsComponent } from './SELLER/view-items/view-items.component';
import { ViewReportsComponent } from './SELLER/view-reports/view-reports.component';
import { ViewProfileComponent } from './SELLER/view-profile/view-profile.component';
import { BuyerLandingPageComponent } from './BUYER/buyer-landing-page/buyer-landing-page.component';
import { SerachItemsComponent } from './BUYER/search-items/serach-items.component';
import { ViewCartComponent } from './BUYER/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './BUYER/purchase-history/purchase-history.component';
import { BuyProductComponent } from './BUYER/buy-product/buy-product.component';
import { AdminLandingPageComponent } from './ADMIN/admin-landing-page/admin-landing-page.component';
import { BlockRUnblockBuyerComponent } from './ADMIN/block-r-unblock-buyer/block-r-unblock-buyer.component';
import { BlockRUnblockSellerComponent } from './ADMIN/block-r-unblock-seller/block-r-unblock-seller.component';
import { AddCategoryComponent } from './ADMIN/add-category/add-category.component';
import { AddSubcategoryComponent } from './ADMIN/add-subcategory/add-subcategory.component';
import { DailyReportsComponent } from './ADMIN/daily-reports/daily-reports.component';
import { LoginComponent } from './ACCOUNT/login/login.component';
import { RegisterBuyerComponent } from './ACCOUNT/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './ACCOUNT/register-seller/register-seller.component';
import { HomeComponent } from './ACCOUNT/home/home.component';
import { EditProfileComponent } from './BUYER/edit-profile/edit-profile.component';
import { EditProfile1Component } from './SELLER/edit-profile1/edit-profile1.component';
import { AccountService } from './Sevices/account.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    ViewProfileComponent,
    BuyerLandingPageComponent,
    SerachItemsComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    AdminLandingPageComponent,
    BlockRUnblockBuyerComponent,
    BlockRUnblockSellerComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    HomeComponent,
    EditProfileComponent,
    EditProfile1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
