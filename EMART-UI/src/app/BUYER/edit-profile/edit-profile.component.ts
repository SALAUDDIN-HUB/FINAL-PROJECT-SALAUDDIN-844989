import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms' ;
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  EditForm:FormGroup;
  submitted=false;
  lists:Buyer[]=[];
  item:Buyer;
  username:string;
  password:string;
  emailid:string;
  mobileNumber:number; 
constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
      this.EditForm=this.formbuilder.group({
      username:['',[Validators.required,Validators.pattern('^[A-Z][0-9]$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobileNumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
    

    });
  }
  
  onSubmit()
  {
    this.submitted=true;
    if(this.EditForm.valid)
    {
      this.item=new Buyer();
      this.item.id=this.EditForm.value["id"];
      this.item.username=this.EditForm.value["username"];
      this.item.password=this.EditForm.value["password"];
      this.item.emailid=this.EditForm.value["emailid"];
      this.item.mobileNumber=this.EditForm.value["mobile"];
      alert('Success!! :-)\n\n');
      console.log(JSON.stringify(this.EditForm)) ;
      this.lists.push(this.item);
    }
  }
  get f() { return this.EditForm.controls; }
onReset()
{
  this.submitted=false;
  this.EditForm.reset();
}
}
