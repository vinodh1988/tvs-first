import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'firstapp';
  titles:string[]=["Web Technologies","DB Technologies","OS technologies"];
  lists:string[][]=[
    ["CSS","JS","Angular","React"],
    ["SQL","PLSQL","RAC","Golden Gate"],
    ["RED HAT","SOLARIS","WINDOWS SERVER"]
  ]

  developer:string="Vinodh";
  technologies:string[]=["ASP.net","HTML5","Javascript","CSS","ANGULAR"];
}
