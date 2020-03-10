import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';
import {Buyer} from 'src/app/Models/buyer';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  GetAllCategories() {
    throw new Error("Method not implemented.");
  }
  url:string='http://localhost:52676/Buyer/'

  constructor(private http:HttpClient,private service:BuyerService) { }
 public SearchItemByName(item:string ):Observable<any>
  {
    return this.http.get<any>(this.url+'SearchItemByName/'+item,Requestheaders)
  }
  public BuyItem(obj:PurchaseHistory):Observable<any>
  {
    return this.http.post<any>(this.url+'BuyItem',obj,Requestheaders);
  }
  public GetCategories():Observable<any>{
    return this.http.get<any>(this.url+'GetCategories',Requestheaders);
  }
  public GetByName(name:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItemByName/'+name,Requestheaders);
  }
  public GetItemByCategoryId(id:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItemByCategory/'+id,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.url+'AddtoCart',cart,Requestheaders);
  }
  public GetAllItems():Observable<any>{
    return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
  }
  public GetById(id:any):Observable<Buyer>
  {
      return this.http.get<Buyer>(this.url+'GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Buyer):Observable<Buyer>
  {
    return this.http.put<Buyer>(this.url+'EditProfile',seller,Requestheaders);
  }
 
  public GetCartItems(bid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCartItems/'+bid,Requestheaders);
  }
  public RemoveCartItem(itemid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCartItem/'+itemid,Requestheaders);
  }
}
