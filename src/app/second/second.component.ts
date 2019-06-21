import { Component, OnInit,Input } from '@angular/core';
/*
  <second [title]=""></second>
*/
@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
@Input('title') data:string="Default title";
@Input('techlist') items:string[]=[];
theme:string="box1";
bcolor:string="red";
  constructor() { }

  ngOnInit() {
  }

  toggleTheme(){
     // this.theme=this.theme=='box1'?'box2':'box1';

      if(this.theme=='box1')
         this.theme='box2'
      else  
          this.theme='box1'
  }
}
