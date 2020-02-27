import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:52676/Admin/'

  constructor(private http:HttpClient) {}
    public AddCategory(item:Category):Observable<any>
    {
      return this.http.post<any>(this.url+'AddCategory',JSON.stringify(item),Requestheaders)
    }
    public AddSubCategory(item:SubCategory):Observable<any>
    {
      return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(item),Requestheaders)
    }
    
   }

