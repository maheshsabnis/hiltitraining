import { Component,OnInit, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormRecord, Validators} from '@angular/forms';
import { Employee } from '../models/app.employee.model';
//import {ControlValueAccessorComponent} from './../control-value-accessor/control-value-accessor.component';
@Component({
  selector: 'my-ngnx-app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css'],
})
export class DynamicComponentComponent  implements OnInit {
  employee: Employee;
  public myForm: FormRecord ;
  // public formKeys = ['EmpNo', 'EmpName', 'DeptName', 'Salary']
  formKeys:Array<string>;
  //data:string;
  frmArray :FormArray;

  constructor(private fb:FormBuilder){
   // this.data = '';
    this.myForm = new FormRecord<FormControl<string|null>>({});
    this.employee = new Employee(0,'','',0,'');
    this.formKeys = new Array<string>();
    this.frmArray = new FormArray([new FormControl()]);
  }


  ngOnInit(): void {
    // REading all properties of EMployee Object
    this.formKeys = Object.keys(this.employee);
    // Iterating over it and Generating FormControl
    this.formKeys.forEach((key, i) =>
      this.myForm.addControl(key,
        new FormControl(null, Validators.compose([Validators.required])))
    );

    // this.formKeys.forEach((key,i)=>{
    //   this.frmArray.push(new FormControl(null, Validators.compose([Validators.required])));
    // });



  }

  save():void {
    alert(JSON.stringify( this.myForm.value));
  }
}
