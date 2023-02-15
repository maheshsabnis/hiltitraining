import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'my-ngnx-app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css'],
})
export class TableGridComponent {
  private _DataSource:Array<any>;
  @Output()
  selected:EventEmitter<any>;

  columns:Array<string>;
  constructor(){
    this._DataSource = new Array<any>();
    this.columns = new Array<string>();
    this.selected = new EventEmitter<any>();
  }
  @Input()
  set DataSource(v:Array<any>){
    this._DataSource = v;
    this.columns = Object.keys(this._DataSource[0]);
  }
get DataSource():Array<any>{
  return this._DataSource;
}

onSelected(record:any):void {
  this.selected.emit(record);
}


}
