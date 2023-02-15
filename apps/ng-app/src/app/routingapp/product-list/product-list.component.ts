import { Component, OnInit } from '@angular/core';
import { Product } from 'apps/ng-app/src/models/app.product.model';
import { Router } from '@angular/router';
import { ProductHttpServiceService } from '../../product-http-service.service';

@Component({
  selector: 'my-ngnx-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products:Array<Product>;
  statusMessage:string;
  columns:Array<string>;
 // product: Product;
  constructor(private serv:ProductHttpServiceService, private router:Router){
    this.products = new Array<Product>();
    this.statusMessage = '';
    this.columns = new Array<string>;
  //  this.product= new Product(0,'','','',0,'');
  }

  ngOnInit(): void {
//    this.columns = Object.keys(this.product);
    // Observale
      this.serv.get().subscribe({
         next: (resp)=> {this.products = resp},
         error:(err)=> {this.statusMessage = `Error Occured ${err}`},
         complete:()=>{this.statusMessage = 'Completed'}
      });
  }

  // event will received the 'Event-Payload' from the
  // comoponent that is emitting the 'selected' event
  navigateToEdit(event:any):void {

    // const prd: Product = new Product(0,'','','',0,0,'');
    // prd.ProductRowId = event.ProductRowId;
    // prd.ProductName = event.ProductName;

    // Navigate to EditProductComponent

    this.router.navigate(['edit', event.ProductRowId],
       {queryParams:{id:1, value:JSON.stringify(event)}});
  }

}
