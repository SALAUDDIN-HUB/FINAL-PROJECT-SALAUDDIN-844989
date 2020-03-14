import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { ItemService } from 'src/app/Sevices/item.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  Viewform:FormGroup;
  submitted=false;
  lists:Seller[];
  seller:Seller;

  constructor(private formbuilder:FormBuilder,private service:ItemService) { }

  ngOnInit() {
    this.Viewform=this.formbuilder.group({
      id:[''],
      username:[''],
      password:[''],
      companyName:[''],
     // Gstin:[''],
    //  BriefAboutCompany:[''],
      postalAddress:[''],
      website:[''],
      emailid:[''],
   // contactNumber:['']
    });
    this.Search();
  }
  OnSubmit(){
    this.submitted=true;
  }
  Search()
  {
  
    let seller=localStorage.getItem('seller');
      this.service.ViewProfile(seller).subscribe(res=>{
        this.seller=res;
        console.log(this.seller);
        this.Viewform.patchValue({
          id:this.seller.id,
          username:this.seller.username,
          password:this.seller.password,
          companyName:this.seller.companyName,
         // Gstin:this.seller.Gstin,
        //  BriefAboutCompany:this.seller.BriefAboutCompany,
          postalAddress:this.seller.postalAddress,
          website:this.seller.website,
          emailid:this.seller.emailid,
         //contactNumber:this.seller.ContactNumber
        });
      })
  }
  get f() { return this.Viewform.controls; }
  Update()
  {
    this.seller=new Seller();
      this.seller.id=this.Viewform.value["id"];
      this.seller.username=this.Viewform.value["username"];
      this.seller.password=this.Viewform.value["password"];
      this.seller.companyName=this.Viewform.value["companyName"];
    //  this.seller.Gstin=this.Viewform.value["Gstin"];
    //  this.seller.BriefAboutCompany=this.Viewform.value["BriefAboutCompany"];
      this.seller.postalAddress=this.Viewform.value["postalAddress"];
      this.seller.website=this.Viewform.value["website"];
      this.seller.emailid=this.Viewform.value["emailid"];
     // this.seller.ContactNumber=this.Viewform.value["contactNumber"];   
      console.log(this.seller);
      this.service.Update(this.seller).subscribe(res=>{
         console.log('Record Updated');
      },err=>{
        console.log(err);
      })
  }
}
