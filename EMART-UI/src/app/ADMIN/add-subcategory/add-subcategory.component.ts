import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Sevices/admin.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  AddsubcategoryForm:FormGroup;
  submitted=false;
  
  sub_cate:SubCategory;

  constructor(private formbuilder:FormBuilder,private service:AdminService) {}

  ngOnInit() {
    this.AddsubcategoryForm=this.formbuilder.group({
    SubCategoryId:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
    SubCategoryName:['',[Validators.required,Validators.pattern('')]],
    CategoryId:['',[Validators.required,Validators.pattern('^[0-9]{3}$')]],
    BriefDetails:['',[Validators.required,Validators.pattern('')]],
    Gst:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]]
  });
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.AddsubcategoryForm.valid)
    {
      this.sub_cate=new SubCategory();
      this.sub_cate.SubCategoryId=this.AddsubcategoryForm.value["SubCategoryId"];
      this.sub_cate.SubCategoryName=this.AddsubcategoryForm.value["SubCategoryName"];
      this.sub_cate.CategoryId=this.AddsubcategoryForm.value["CategoryId"];
      this.sub_cate.BriefDetails=this.AddsubcategoryForm.value["BriefDetails"];
      this.sub_cate.Gst=this.AddsubcategoryForm.value["Gst"];

      console.log(this.sub_cate); 
      this.service.AddSubCategory(this.sub_cate).subscribe(res=>{
        alert('Added Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
    
  get f() { return this.AddsubcategoryForm.controls; }
}


