import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit {
  constructor() { }
  screen= " ";
  a;
  b;
  c;
  d="";
  e="";

  ngOnInit(): void {
  }
  entervalue(value){
    if((this.b=="+")||(this.b=="-")||(this.b=="*")||(this.b=="/")||(this.b=="%")||(this.b=="√x")||(this.b=="x^2")||(this.b=="1/x")){

      this.d=this.d+value;
      this.screen=this.screen+value;
      this.c=this.d;
    }
    else{
      this.screen=this.screen+value;
      this.a=this.screen;
    }
  }
  condition(value){
    this.screen=this.screen+value;
    this.b=value;
  }
  clear(){
    this.screen="",
    this.a="";
    this.b="";
    this.c="";
    this.d="";
  }
  objectArray=[];

   result(){
    if(this.b=="+"){
      this.screen=this.screen+"="+(parseFloat(this.a)+parseFloat(this.c)).toString();
      this.screen=(parseFloat(this.screen)+parseFloat(this.c)).toString();

      this.objectArray.push(parseFloat(this.screen)+parseFloat(this.c));
      console.log(this.objectArray);
    }
    if(this.b=="-"){

      this.screen=this.screen+"="+(parseInt(this.a)-parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();

    }
    if(this.b=="*"){
      this.screen=this.screen+"="+(parseInt(this.a)*parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)*parseInt(this.c)).toString();
    }
    if(this.b=="/"){
      this.screen=this.screen+"="+(parseInt(this.a)/parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)/parseInt(this.c)).toString();
    }
  }

}