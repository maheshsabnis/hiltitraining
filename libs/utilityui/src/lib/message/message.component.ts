import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-ngnx-app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  message:string;

  private _values:Array<any>;

  private _Val:number;

  constructor(){
    this.message = "I am From Library";
    this._Val = 0;
    this._values = new Array<any>();
  }

  @Input()
  set Val(v:number){
    this._Val = v;
  }
  get Val():number {
    return this._Val;
  }

  @Input()
  set Values(v:Array<any>){
    this._values = v;
  }
  get Values():Array<any>{
    return this._values;
  }
}
