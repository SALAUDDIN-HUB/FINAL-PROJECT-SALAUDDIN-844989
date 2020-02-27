import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-edit-profile1',
  templateUrl: './edit-profile1.component.html',
  styleUrls: ['./edit-profile1.component.css']
})
export class EditProfile1Component implements OnInit {
  RegisterForm1:FormGroup;
  submitted=false;
  lists:Seller[]=[];
  item:Seller;
  id:number;
    username:string;
    password:string;
    companyName:string;
    Gstin:number;
    BriefAboutCompany:string;
    postalAddress:string;
    website:string;
    emailid:string;
    ContactNumber:number;

  constructor(private formbuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.RegisterForm1=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z][0-9]$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      companyName:['',[Validators.required,Validators.pattern('^[a-zA-Z]$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[0-9]$')]],
      BriefAboutCompany:['',[Validators.required,Validators.pattern('^[a-zA-z]$')]],
      postalAddress:['',[Validators.required,Validators.pattern('^[a-zA-Z][0-9]$')]],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      ContactNumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]


  });

}
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm1.valid)
    {
      this.item=new Seller();
      this.item.id=this.RegisterForm1.value["id"];
      this.item.username=this.RegisterForm1.value["username"];
      this.item.password=this.RegisterForm1.value["password"];
      this.item.companyName=this.RegisterForm1.value["companyName"];
      this.item.Gstin=this.RegisterForm1.value["Gstin"];
      this.item.BriefAboutCompany=this.RegisterForm1.value["BreifAboutCompany"];
      this.item.postalAddress=this.RegisterForm1.value["postalAddress"];
      this.item.website=this.RegisterForm1.value["website"];
      this.item.emailid=this.RegisterForm1.value["emailid"];
      this.item.ContactNumber=this.RegisterForm1.value["ContactNumber"];
      alert('Success!! :-)\n\n');
      console.log(JSON.stringify(this.RegisterForm1)) ;
      this.lists.push(this.item);
    }
  }
  get f() { return this.RegisterForm1.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm1.reset();
}

}