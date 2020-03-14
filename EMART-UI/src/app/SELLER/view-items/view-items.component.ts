import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Items} from 'src/app/Models/items';
import { ItemService } from 'src/app/Sevices/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Items[];
  items:Items;
  viewform:FormGroup;
  isShow:boolean=true;
  image:string;

  constructor(private service:ItemService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.viewform=this.formBuilder.group({
      id:[''],
      categoryId:[''],
      subCategoryId:[''],
      sellerid:[''],
      price:[''],
      itemName:[''],
      itemDescription:[''],
      stockNumber:[''],
      remarks:[''],
      image:[''],
    });
    this.ViewItems();
  }
  ViewItems()
  { 
    let seller=localStorage.getItem('seller')
    this.service.ViewItems(seller).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
  
  Update()
  {
    // this.isShow=!this.isShow;
    this.items=new Items();
   
    this.items.id=this.viewform.value["id"];
    this.items.categoryId=this.viewform.value["categoryId"];
    this.items.subCategoryId=this.viewform.value["subCategoryId"];
    this.items.sellerid=this.viewform.value["sellerid"];
    this.items.itemName=this.viewform.value["itemName"];
    this.items.price=Number(this.viewform.value["price"]);
    this.items.itemDescription=this.viewform.value["itemDescription"];
    this.items.stockNumber=Number(this.viewform.value["stockNumber"]);
    this.items.remarks=this.viewform.value["remarks"];
    this.items.image=this.viewform.value["image"];
    console.log(this.items);
  this.service.UpdateItem(this.items).subscribe(res=>{
    console.log('Record Updated');
    alert('Record Updated');
  }
  ,err=>{
    console.log(err);
  })
  }
  Delete(id:string){
  
    this.service.DeleteItem(id).subscribe(res=>{
      alert('Record Deleted');
    }),
    err=>{
      console.log(err);
    }
  }
  GetItems(itemid:string)
  {
      this.service.GetItems(itemid).subscribe(res=>
         {
           this.items=res;
           console.log("get");
           console.log(this.items);
           console.log('Id Found');
           //console.log(res);
           this.viewform.setValue(
             {
              
             id:this.items.id,
               itemName:this.items.itemName,
               price:this.items.price,
               itemDescription:this.items.itemDescription,
               stockNumber:this.items.stockNumber,
               sellerid:this.items.sellerid,
               categoryId:this.items.categoryId,
               subCategoryId:this.items.subCategoryId,
               remarks:this.items.remarks,
               image:this.items.image
               
             }
           )
         },
         err=>
         {
           console.log(err);
         }
       )
        }
       fileEvent(event)
       {
         this.image=event.target.files[0].name;
       }

}
