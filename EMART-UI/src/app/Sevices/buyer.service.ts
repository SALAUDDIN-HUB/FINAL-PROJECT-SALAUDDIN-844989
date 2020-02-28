import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';
import {Buyer} from 'src/app/Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:52676/Buyer/'

  constructor(private http:HttpClient,private service:BuyerService) { }
}
