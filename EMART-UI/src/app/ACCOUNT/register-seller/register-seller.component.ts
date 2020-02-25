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
  id:number;
    username:string;
    password:string;
    companyname:string;
    GSTIN:number;
    brief_about_company:string;
    postal_address:string;
    website:string;
    emailid:string;
    contact:number;

  constructor(private formbuilder:FormBuilder,private service:AccountService) { 

  }

  ngOnInit() {
    this.RegisterForm1=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z]$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-zA-Z]$')]],
      GSTIN:['',[Validators.required,Validators.pattern('^[0-9]$')]],
      brief_about_company:['',[Validators.required,Validators.pattern('^[a-zA-z]$')]],
      postal_address:['',[Validators.required,Validators.pattern('^[a-zA-Z][0-9]$')]],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]


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
      this.seller.companyname=this.RegisterForm1.value["company name"];
      this.seller.GSTIN=this.RegisterForm1.value["GSTIN"];
      this.seller.brief_about_company=this.RegisterForm1.value["breif-about-company"];
      this.seller.postal_address=this.RegisterForm1.value["postal address"];
      this.seller.website=this.RegisterForm1.value["website"];
      this.seller.emailid=this.RegisterForm1.value["emailid"];
      this.seller.contact=this.RegisterForm1.value["contact"];
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