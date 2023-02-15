import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

// Lets import RouterModule

import {Route, RouterModule} from '@angular/router';

import { UtilityuiModule } from '@my-ngnx-app/utilityui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { ProductListComponent } from './routingapp/product-list/product-list.component';
import { CreateProductComponent } from './routingapp/create-product/create-product.component';
import { EditProductComponent } from './routingapp/edit-product/edit-product.component';
import { MainRoutingComponent } from './routingapp/main-routing/main-routing.component';
import { TableGridComponent } from './table-grid/table-grid.component';



// Define a Route Table as an Array of Route

const routes:Route[] = [
  {path:'', component:ProductListComponent}, // default Route
  {path:'create', component:CreateProductComponent,
  // Sub-Routing aka Child Routing
  children:[
        {path:'person', component:PersonFormComponent}
      ]},
  {path: 'edit/:id', component:EditProductComponent}, // With Parameters
  {path:'lazy', loadChildren:()=>import('@my-ngnx-app/utilityui').then(m=>m.UtilityuiModule)},
  {path:'**', redirectTo:''} // If no path match
];




@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PersonFormComponent,
    DynamicComponentComponent,
    ControlValueAccessorComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    MainRoutingComponent,
    TableGridComponent,
  ],
  imports: [BrowserModule,
    FormsModule, ReactiveFormsModule,
   HttpClientModule,
   // Register The route Table with all its expression at root level
   RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [MainRoutingComponent],
})
export class AppModule {}
