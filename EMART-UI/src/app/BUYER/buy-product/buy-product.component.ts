import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BuyerService } from 'src/app/Sevices/buyer.service';
import { combineLatest } from 'rxjs';
import {Items} from 'src/app/Models/items';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  RegisterForm:FormGroup;
  constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) { }
  item:Items;
  obj:PurchaseHistory;
  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      Transactiontype:[''],
      cardnumber:[''],
      cvv:[''],
      ed:[''],
      name:[''],
      date:[''],
      numberofitems:[''],
      remarks:['']
    })
     this.item=JSON.parse(localStorage.getItem('item1'));
     console.log(this.item);
     
  }
  onSubmit()
  {
    let bid=localStorage.getItem('buyer');
     this.obj=new PurchaseHistory();
     this.obj.id='TID'+Math.round(Math.random()*1000);
     this.obj.Buyerid=bid;
    this.obj.sellerid=this.item.sellerid;
     this.obj.numberofitems=this.RegisterForm.value["numberofitems"];
     this.obj.Itemid=this.item.id;
     this.obj.Transactiontype=this.RegisterForm.value["Transactiontype"]
     this.obj.Datetime=new Date();
     this.obj.remarks=this.RegisterForm.value["remarks"];
     console.log(this.obj);
     this.service.BuyItem(this.obj).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
     })
    }
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login');
}
}

