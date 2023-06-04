import { Component } from '@angular/core';

@Component({
  selector: 'app-gm-row-column',
  templateUrl: './gm-row-column.component.html',
  styleUrls: ['./gm-row-column.component.css']
})
export class GmRowColumnComponent {

  boxAnimation : boolean = false;
  lineAnimation : boolean = false;

  reverseOne : boolean = false;
  reverseTwo : boolean = false;


  fourBox(){
    this.reverseOne = true;
    this.reverseTwo = false;
  }
  threeLine(){
    this.reverseTwo = true;
    this.reverseOne = false;
  }



}
