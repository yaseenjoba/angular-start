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
  search="Enter the student name !"
  students = [
    {
      name: "yaseen",
      id: 181033,
      age:20,
      date:new Date(2000,1,1)
    },
    {
      name: "Ahmad",
      id: 18100,
      age:12,
      date:new Date(2020,5,1)
    },
    {
      name: "mohammed",
      id: 18144,
      age:19,
      date:new Date(2005,2,20)
    }
  ];
  
  forsearch=[
    {
      name: "yaseen",
      id: 181033,
      age:20,
      date:new Date(2000,1,1)
    },
    {
      name: "Ahmad",
      id: 18100,
      age:12,
      date:new Date(2020,5,1)
    },
    {
      name: "mohammed",
      id: 18144,
      age:19,
      date:new Date(2005,2,20)
    }
  ];
  add(){
    this.students.push(
      {
         "name" : this.name1,
         "id" : this.id1,
         "age":this.age1,
         "date":new Date(this.year,this.month,this.day)
      }
    );
    this.forsearch=this.students;
    
  }
  filter1(){
  this.students.filter((x)=>{(console.log(x.name.includes(this.search)));});
    this.forsearch = this.students.filter((x)=>x.name.includes(this.search));
    console.log(this.forsearch);
  }
  
 
 

}

