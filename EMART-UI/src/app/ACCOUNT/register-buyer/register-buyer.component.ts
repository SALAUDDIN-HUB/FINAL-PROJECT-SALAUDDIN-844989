import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms' ;
import { Buyer } from 'src/app/Models/buyer';

import { AccountService } from 'src/app/Sevices/account.service';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  RegisterForm:FormGroup;
  submitted=false;
  lists:Buyer[]=[];
  item:Buyer;
  id:number;
  username:string;
  password:string;
  emailid:string;
  mobileNumber:number; 
  createddatetime:Date;


  constructor(private formbuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
      this.RegisterForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createddatetime:['',Validators.required]

    });
  }
  
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm.valid)
    {
      this.item=new Buyer();
      this.item.id=this.RegisterForm.value["id"];
      this.item.username=this.RegisterForm.value["username"];
      this.item.password=this.RegisterForm.value["password"];
      this.item.emailid=this.RegisterForm.value["emailid"];
      this.item.mobileNumber=this.RegisterForm.value["mobile"];
      this.item.createddatetime=this.RegisterForm.value["createdatetime"]
      console.log(this.item); 
      this.service.RegisterBuyer(this.item).subscribe(res=>{
        alert('Registration Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
    
  
  get f() { return this.RegisterForm.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm.reset();
}
}


