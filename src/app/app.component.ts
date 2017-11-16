

import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import require from 'requirejs';
//import 'requirejs';
//var req = require('requirejs');

// import * as req from 'require';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

   RunApplication(apiUrl: string) {
    
        // Create our API config provider using the external clsdata
        //
       //  let apiConfig = new ApiConfig();
         //apiConfig.apiUrl = apiUrl;
        // apiConfig.apiToken = apiToken;
        
        // Now we can call bootstrap, but we have the API config object
        //  set up as well. Just create is as an injectable token here
        //  so other components/services can consume it.
        //
        console.log(apiUrl);
        platformBrowserDynamic().bootstrapModule(someType);
        // bootstrap(AppComponent, [
        //     provide("api.config", {useValue: apiConfig})
        // ]);  
    }

  ngOnInit() {
    //And, this iterates over to see the location dynamically and load the same.
    //this.files.forEach(element => {
    //  return import (element).then((comp:any)=>{
    //    return comp.default;
       
    //  }); 
    // return import(element).then((m)=>{
    //   //m.RunApplication(element);
    //   this.RunApplication(element);
    // });
  //  this.RunApplication(element);
    //});
   
  //  var OtherModule = import("../../dist/module1/some.module");
    //console.log(OtherModule);
    //import(OtherModule).then(module=>{
      //console.log(OtherModule);
    //});
    // this.files.forEach(el=>{
    //   import(el).then(module=>{
    //     console.log(module);
    //   });
    // });
     //This means let's say we get some modules on REST Call basically
     //import accepts module path in string format only
//  import('../../dist/module1/some.module').then(module => { //working
//       //this.name = module.reverseString(this.name);
//     console.log(module);
//    });
// const moduleSpecifier = '../../dist/module1/some.module';
// import(moduleSpecifier)
// .then(foo => console.log(foo));
this.parseAsModule(this.files);
    //  import('../../dist/module1/main.bundle').then(module => {
    //   //this.name = module.reverseString(this.name);
    //  console.log(module);
    // });
  }
  
  title = 'app';

  //For instance, this is the files collection
 // files =['../../dist/module1/main.bundle.js']
// files =['../../dist/module1/main.bundle.js'];
files=['../../dist/module1/some.module'];

 parseAsModule(filesColl:string[]){
  if(filesColl.length>0){
    //Pass it to import function
    for(var i=0;i<filesColl.length;i++){
      const someModule = require(filesColl[i].toString());
      
      //import(filesColl[i].toString()).then(module=>{
        //console.log(module);
      //})
    }
    
  }
 }
}




  class someType{}
