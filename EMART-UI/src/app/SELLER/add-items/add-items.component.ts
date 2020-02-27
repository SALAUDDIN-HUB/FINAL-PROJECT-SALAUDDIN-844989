
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
    Sub_Category_id:['',Validators.required],
    sellerid:['',Validators.required],
    price:['',Validators.required],
    itemName:['',Validators.required],
    ItemDescription:['',Validators.required],
    stock_number:['',Validators.required],
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
      this.item.category_id=this.Itemform.value["categoryId"];
      this.item.Sub_Category_id=this.Itemform.value["Sub_Category_id"];
      this.item.sellerid=this.Itemform.value["sellerid"];
      this.item.price=Number(this.Itemform.value["price"]);
      this.item.itemName=this.Itemform.value["itemName"];
      this.item.ItemDescription=this.Itemform.value["ItemDescription"];
      this.item.stock_number=Number(this.Itemform.value["stock_number"]);
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
      this.Itemform.setValue({
        id:this.item.id,
        category_id:this.item.category_id,
        Sub_Category_id:this.item.Sub_Category_id,
        sellerid:this.item.sellerid,
        
        price:this.item.price,
        itemName:this.item.itemName,
       ItemDescription:this.item.ItemDescription,
        stock_number:this.item.stock_number,
        remarks:this.item.remarks
      })
    })
  
  }
  Update()
  {
    this.item=new Items();
    this.item.id=this.Itemform.value['id'],
        this.item.category_id=this.Itemform.value['category_id'],
      this.item.Sub_Category_id=this.Itemform.value['Sub_Category_id'],
      this.item.sellerid=this.Itemform.value['sellerid'],
      this.item.price=this.Itemform.value['price'],
      this.item.itemName=this.Itemform.value['itemName'],
      this.item.ItemDescription=this.Itemform.value['ItemDescription'],
      this.item.stock_number=this.Itemform.value['stock_number'],
      this.item.remarks=this.Itemform.value['remarks']
      console.log(this.item);
      this.service.UpdateItems(this.item).subscribe(res=>{
        console.log('Record Updated');
      }
      ,err=>{
        console.log(err);
      })
    
    }
}
