import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { loadavg } from 'os';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-project';
  mydate = Date.now();
  students = [
    {
      name: "yaseen",
      id: 181033,
      age:20,
    },
    {
      name: "Ahmad",
      id: 18100,
      age:12,
      date:new Date(1,1,2000)
    },
    {
      name: "mohammed",
      id: 18144,
      age:19,
      date:new Date(1,1,2005)
    }
  ];
  add(name : string ,id: any,age:any,day:any,month:any,year:any){
    this.students.push(
      {
         "name" : name,
         "id" : id,
         "age":age,
         "date":new Date(day,month,year)
      }
    );
    
  }
  
 
 

}

