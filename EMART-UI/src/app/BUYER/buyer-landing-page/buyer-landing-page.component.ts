import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Buyer}from 'src/app/Models/buyer';
import{Items}from 'src/app/Models/items';
import{BuyerService} from 'src/app/Sevices/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  itemlist:Items[];
  itemName:string;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) {
    if(localStorage.getItem('token')){

      this.service.GetCategories().subscribe(res=>{
        this.itemlist=res;
        console.log(this.itemlist);
      })
      this.service.GetAllItems().subscribe(res=>{
        this.itemlist=res;
        console.log(this.itemlist);
        
      })
    }
    else{
      alert('please login With your Credentials');
      this.route.navigateByUrl('/home/login');
    }
  }
  
    ngOnInit() {
    
  }
  search(itemName:string)
  {
    this.service.SearchItemByName(itemName).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
    })


  }
  LogOut()
{
  localStorage.clear();
  this.route.navigateByUrl('/home/login')
}
}