import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Sevices/admin.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  CategoryForm:FormGroup;
  submitted=false;
  
  cate:Category;
  constructor(private formbuilder:FormBuilder,private servcie:AdminService) { }

  ngOnInit() {
    this.CategoryForm=this.formbuilder.group({
      CategoryId:['',[Validators.required]],
      CategoryName:['',[Validators.required]],
      BriefDetails:['',[Validators.required]]
     
  });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.CategoryForm.valid)
    {
      this.cate=new Category();
      this.cate.CategoryId=this.CategoryForm.value["CategoryId"];
      this.cate.CategoryName=this.CategoryForm.value["CategoryName"];
      this.cate.BriefDetails=this.CategoryForm.value["BriefDetails"];
      console.log(this.cate); 
      this.servcie.AddCategory(this.cate).subscribe(res=>{
        alert('Added Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
  get f() { return this.CategoryForm.controls; }

}
