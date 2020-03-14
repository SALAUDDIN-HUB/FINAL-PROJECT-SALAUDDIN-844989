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
      return this.http.post<any>(this.url+'Item/AddItem',JSON.stringify(item),Requestheaders)
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
  public UpdateItem(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Item/UpdateItem',items,Requestheaders);
  }
  public GetAllCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetAllCategories',Requestheaders);
  }
  public GetAllSubCategories(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetAllSubCategories/'+id,Requestheaders);
  }
  public DeleteItem(id:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'Item/DeleteItem/'+id,Requestheaders);
  }
  public GetReports(SellerId:string):Observable<any>{
    return this.http.get<any>(this.url+'Seller/GetReports/'+SellerId,Requestheaders);
  }
}
