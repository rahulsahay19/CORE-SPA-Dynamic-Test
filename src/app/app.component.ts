import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    //And, this iterates over to see the location dynamically and load the same.
    this.files.forEach(element => {
      return import (element).then((comp:any)=>{
        return comp.default;
      }); 
    });
 
  }
  title = 'app';

  //For instance, this is the files collection
  files =['./module1/main-bundle']
}
