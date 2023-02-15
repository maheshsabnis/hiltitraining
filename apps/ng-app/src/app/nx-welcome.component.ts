import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'my-ngnx-app-nx-welcome',
  template: `
     <h1>The WelCome COmponent</h1>
     <!-- <my-ngnx-app-message [Val]="1000"
     [Values]="names"
     ></my-ngnx-app-message> -->
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
   names:Array<string>;
   constructor(){
      this.names =['Bond', 'Hunt', 'Jones', 'Reacher' ];
   }
}
