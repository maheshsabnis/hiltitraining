import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { MessageComponent } from './message/message.component';

const routes:Routes =[
  {path:'', component:MessageComponent}
];


@NgModule({
  imports: [CommonModule,
    // The Child Routing with Lazy Loading
    RouterModule.forChild(routes)],
  declarations: [MessageComponent]
})
export class UtilityuiModule {}
