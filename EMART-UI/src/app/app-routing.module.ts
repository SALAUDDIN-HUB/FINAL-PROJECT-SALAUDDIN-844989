import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingPageComponent } from './BUYER/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './BUYER/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './BUYER/purchase-history/purchase-history.component';

import { ViewCartComponent } from './BUYER/view-cart/view-cart.component';
import { SellerLandingPageComponent } from './SELLER/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './SELLER/add-items/add-items.component';
import { ViewProfileComponent } from './SELLER/view-profile/view-profile.component';
import { ViewReportsComponent } from './SELLER/view-reports/view-reports.component';
import { AddCategoryComponent } from './ADMIN/add-category/add-category.component';
import { AddSubcategoryComponent } from './ADMIN/add-subcategory/add-subcategory.component';
import { AdminLandingPageComponent } from './ADMIN/admin-landing-page/admin-landing-page.component';
import { BlockRUnblockBuyerComponent } from './ADMIN/block-r-unblock-buyer/block-r-unblock-buyer.component';
import { BlockRUnblockSellerComponent } from './ADMIN/block-r-unblock-seller/block-r-unblock-seller.component';
import { DailyReportsComponent } from './ADMIN/daily-reports/daily-reports.component';
import { LoginComponent } from './ACCOUNT/login/login.component';
import { RegisterBuyerComponent } from './ACCOUNT/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './ACCOUNT/register-seller/register-seller.component';
import { HomeComponent } from './ACCOUNT/home/home.component';
import { EditProfileComponent } from './BUYER/edit-profile/edit-profile.component';
import {ViewItemsComponent} from './SELLER/view-items/view-items.component';
import { SearchitemsComponent } from './BUYER/searchitems/searchitems.component';





const routes: Routes = [
  {path:'buyer-landing-page',component:BuyerLandingPageComponent,children:[
    {path:'buy-product',component:BuyProductComponent},
    {path:'purchase-history',component:PurchaseHistoryComponent},
   {path:'searchitems',component:SearchitemsComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'edit-profile',component:EditProfileComponent},
    
  ]},
  {path:'seller-landing-page',component:SellerLandingPageComponent,children:[
    {path:'add-items',component:AddItemsComponent},
    {path:'view-items',component:ViewItemsComponent},
    {path:'view-profile',component:ViewProfileComponent},
    {path:'view-reports',component:ViewReportsComponent},
    
  ]},
  {path:'admin-landing-page',component:AdminLandingPageComponent,children:[
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-subcategory',component:AddSubcategoryComponent},
    {path:'block-r-unblock-buyer',component:BlockRUnblockBuyerComponent},
    {path:'block-r-unblock-seller',component:BlockRUnblockSellerComponent},
    {path:'daily-reports',component:DailyReportsComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent},
  
  
]},
{path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
