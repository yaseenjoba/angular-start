import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'my-first-project';
  mydate = Date.now();
  name1="yaseen";
  id1=181033
  age1=20;
  month=8
  day=5;
  year=2000;
  students = [
    {
      name: "yaseen",
      id: 181033,
      age:20,
      date:new Date(1,1,2000)
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
  add(){
    this.students.push(
      {
         "name" : this.name1,
         "id" : this.id1,
         "age":this.age1,
         "date":new Date(this.day,this.month,this.year)
      }
    );
    
  }
  
 
 

}

