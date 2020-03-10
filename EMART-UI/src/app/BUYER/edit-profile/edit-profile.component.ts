import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms' ;
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from 'src/app/Sevices/buyer.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  EditForm:FormGroup;
  submitted=false;
  lists:Buyer[];
  buyer:Buyer;
  
constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
        this.EditForm=this.formbuilder.group({
          id:[''],
          username:[''],
          emailid:[''],
          mobileNumber:[''],

    });
  }
  
  ngOnInit() {
    this.viewprofile(); 
  }
  viewprofile()
  {
      let id=localStorage.getItem("buyer")
    
      this.service.GetById(id).subscribe(res=>{this.buyer=res;
      console.log(this.buyer)
      this.EditForm.setValue({
        id:this.buyer.id,
        username:this.buyer.username,
       emailid:this.buyer.emailid,
        mobileNumber:this.buyer.mobileNumber,
        
      })
    });
  }
  get f(){return this.EditForm.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.EditForm.valid)
    {
      this.buyer.id=this.EditForm.value["id"];
      this.buyer.username=this.EditForm.value["username"];
  
      this.buyer.mobileNumber=this.EditForm.value["mobileNumber"];
      this.buyer.emailid=this.EditForm.value["emailid"];
      console.log(this.buyer)
      this.service.Update(this.buyer).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

   
   }
  }


}
