import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
submitted=false;
item:Buyer;

  constructor(private formbuilder:FormBuilder) { 
    this.item=new Buyer();
    

  }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      uname:['',Validators.required],
      pwd:['',Validators.required]
    });
  }
onSubmit()
{
this.submitted=true;
  if(this.loginForm.invalid)
  {
    return;
  }
  else
  {
    alert("Form is Validate");
    console.log(this.loginForm.value)
    console.log(JSON.stringify(this.loginForm.value))
    console.log(this.loginForm.value["uname"])
    console.log(this.loginForm.value["pwd"])
    //
    this.item.username=this.loginForm.value["uname"]
    this.item.password=this.loginForm.value["pwd"]
    console.log(this.item)
  }

}
get f() { return this.loginForm.controls; }
onReset()
{
  this.submitted=false;
  this.loginForm.reset();
}
}