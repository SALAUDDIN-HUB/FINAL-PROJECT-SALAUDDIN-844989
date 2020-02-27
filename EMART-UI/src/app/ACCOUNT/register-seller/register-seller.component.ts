import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/Sevices/account.service';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  RegisterForm1:FormGroup;
  submitted=false;
  lists:Seller[]=[];
  seller:Seller;
    constructor(private formbuilder:FormBuilder,private service:AccountService) { 

  }

  ngOnInit() {
    this.RegisterForm1=this.formbuilder.group({
      id:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      companyName:['',Validators.required],
      Gstin:['',Validators.required],
      BriefAboutCompany:['',Validators.required],
      postalAddress:['',Validators.required],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      ContactNumber:['',Validators.required]


  });

}
  onSubmit()
  {
    this.submitted=true;
    
    if(this.RegisterForm1.valid)
    {
      this.seller=new Seller();
      this.seller.id=this.RegisterForm1.value["id"];
      this.seller.username=this.RegisterForm1.value["username"];
      this.seller.password=this.RegisterForm1.value["password"];
      this.seller.companyName=this.RegisterForm1.value["companyName"];
      this.seller.Gstin=this.RegisterForm1.value["Gstin"];
      this.seller.BriefAboutCompany=this.RegisterForm1.value["BriefAboutCompany"];
      this.seller.postalAddress=this.RegisterForm1.value["postalAddress"];
      this.seller.website=this.RegisterForm1.value["website"];
      this.seller.emailid=this.RegisterForm1.value["emailid"];
      this.seller.ContactNumber=this.RegisterForm1.value["ContactNumber"];
      console.log(this.seller); 
      this.service.RegisterSeller(this.seller).subscribe(res=>{
        alert('Registration Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
get f() { return this.RegisterForm1.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm1.reset();
}

}