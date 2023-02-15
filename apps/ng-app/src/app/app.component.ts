import { Component } from '@angular/core';
import { Person } from './models/app.model';

@Component({
  selector: 'my-ngnx-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app';
  //person:Person;
  constructor(){
    //this.person = new Person(0,'','');
  }
}
