import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Items} from 'src/app/Models/items';
import { ItemService } from 'src/app/Sevices/item.service';


@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Items[];
  sellerid:string;

  constructor(private formbuilder:FormBuilder,private service:ItemService) { }

  ngOnInit() {
  }
  
}
