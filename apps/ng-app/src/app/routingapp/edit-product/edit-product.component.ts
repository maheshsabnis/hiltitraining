import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'my-ngnx-app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit{
  ProductRowId:number;
  data: string | null;
  prd:string | null;
  // ActivatedRoute: Resolved using RouterModule
  constructor(private act:ActivatedRoute) {
    this.ProductRowId = 0;
    this.data = '';
    this.prd = '';
  }

  ngOnInit(): void {
      // Subscribe to the Route to read parameters
      this.act.paramMap.subscribe((params)=>{
          this.ProductRowId = Number(params.get('id'));
      });
      this.act.queryParamMap.subscribe((params)=>{
        this.data = params.get('id');
        console.log(`Received Data ${this.data}`);
        this.prd = params.get('value');
        console.log(`Received Data Next ${this.prd}`);
      });
  }

}
