
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Items} from 'src/app/Models/items';
import { ItemService } from 'src/app/Sevices/item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  Itemform:FormGroup;
  submitted=false;
  item:Items;
  


  constructor(private formbuilder:FormBuilder,private service:ItemService) { }

  ngOnInit() {
    this.Itemform=this.formbuilder.group({
    id:['',[Validators.required]],
    categoryId:['',Validators.required],
    subCategoryId:['',Validators.required],
    sellerid:['',Validators.required],
    price:['',Validators.required],
    itemName:['',Validators.required],
    itemDescription:['',Validators.required],
    stockNumber:['',Validators.required],
    remarks:['',Validators.required],
    });
  }
  
  OnSubmit()
  {
    this.submitted=true;
    if(this.Itemform.valid)
    {
      this.item=new Items();
      this.item.id=this.Itemform.value["id"];
      this.item.categoryId=this.Itemform.value["categoryId"];
      this.item.subCategoryId=this.Itemform.value["subCategoryId"];
      this.item.sellerid=this.Itemform.value["sellerid"];
      this.item.price=Number(this.Itemform.value["price"]);
      this.item.itemName=this.Itemform.value["itemName"];
      this.item.itemDescription=this.Itemform.value["itemDescription"];
      this.item.stockNumber=Number(this.Itemform.value["stockNumber"]);
      this.item.remarks=this.Itemform.value["remarks"];
      console.log(this.item); 
      this.service.AddItems(this.item).subscribe(res=>{
        alert('Added Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
  get f(){return this.Itemform.controls;}
  Search()
  {
    let id1=this.Itemform.value["id"];
    console.log(id1);
    this.service.GetItems(id1).subscribe(res=>{
      this.item=res;
      console.log(this.item);
      this.Itemform.patchValue({
        id:this.item.id,
        categoryId:this.item.categoryId,
        subCategoryId:this.item.subCategoryId,
        sellerid:this.item.sellerid,
        price:this.item.price,
        itemName:this.item.itemName,
       itemDescription:this.item.itemDescription,
        stockNumber:this.item.stockNumber,
        remarks:this.item.remarks
      })
    })
  
  }
  Update()
  {
    this.item=new Items();
    this.item.id=this.Itemform.value['id'],
        this.item.categoryId=this.Itemform.value['categoryId'],
      this.item.subCategoryId=this.Itemform.value['subCategoryId'],
      this.item.sellerid=this.Itemform.value['sellerid'],
      this.item.price=this.Itemform.value['price'],
      this.item.itemName=this.Itemform.value['itemName'],
      this.item.itemDescription=this.Itemform.value['itemDescription'],
      this.item.stockNumber=this.Itemform.value['stockNumber'],
      this.item.remarks=this.Itemform.value['remarks']
      console.log(this.item);
      this.service.UpdateItem(this.item).subscribe(res=>{
        console.log('Record Updated');
      }
      ,err=>{
        console.log(err);
      })
    
    }
}
