import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';
import { Items } from '../Models/items';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:52676/'
  constructor(private http:HttpClient) { }
  public AddItems(item:Items):Observable<any>
    {
      return this.http.post<any>(this.url+'Item/Additem',JSON.stringify(item),Requestheaders)
    }
    public ViewItems(sellerid:string):Observable<any>
  {
    return this.http.get(this.url+'Item/ViewItems/'+sellerid,Requestheaders);
  }
  public ViewProfile(id:string):Observable<any>
  {
      return this.http.get<any>(this.url+'Seller/GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Seller/EditProfile',seller,Requestheaders);
  }
  public GetItems(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetItems/'+id,Requestheaders);
  }
  public UpdateItems(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Item/UpdateItemsStock',items,Requestheaders);
  }
}
