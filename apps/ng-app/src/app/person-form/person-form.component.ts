import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address, Person } from '../models/app.model';
import { CustomValidator } from './app.custom.validator';

@Component({
  selector: 'my-ngnx-app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent {
   person: Person;
   persons: Array<Person>;
   frmPerson:FormGroup;
   private loc:Address;
   // Inject the FormBuilder
   constructor(private frmBuilder: FormBuilder){
    this.loc = new Address('','');
    this.person = new Person(0,'','',this.loc);
    this.persons = new Array<Person>();
    // MApping of Model Object with
    // FormGroup (MVC)
    this.frmPerson = new FormGroup({
      PersonId: new FormControl(this.person.PersonId,Validators.compose([Validators.required, CustomValidator.checkEven])),
      PersonName: new FormControl(this.person.PersonName, {nonNullable:true}),
      City: new FormControl(this.person.City, {nonNullable:true})
    });
    // The FormBuilder which will set all
    // FormControl as 'nonNullbale:true' by default (NG14+)
    // this.frmPerson = this.frmBuilder.nonNullable.group({
    //      PersonId: new FormControl<number>(this.person.PersonId),
    //   PersonName: new FormControl<string>(this.person.PersonName),
    //   City: new FormControl<string>(this.person.City)
    // });

    // this.frmPerson = this.frmBuilder.nonNullable.group({
    //   PersonId: [this.person.PersonId],
    //   PersonName: [this.person.PersonName],
    //   City: [this.person.City]
    // });

   }

   save():void{
    // REad value from Form
     this.person = this.frmPerson.value;
     //this.frmPerson.setValue(this.person);
     // PAss data to Array
     this.persons.push(this.person);
   }
   reset():void{
    // Set the FormGroup with its default
     this.frmPerson.reset();
   }
}
