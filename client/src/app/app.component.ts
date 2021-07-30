import { Component } from '@angular/core';

// export interface Patient{
//   name:string;
//   age:number;
//   gender:string;
//   DOB:string;
//   contact:string;
//   HIV:string;
// }
// const ELEMENT_DATA:Patient[] = [
//   {name:'Julia',age:30,gender:'F',DOB:'1/3/1991',contact:'0700000000',HIV:'Positive'},
//   {name:'Julia',age:30,gender:'F',DOB:'1/3/1991',contact:'0700000000',HIV:'Positive'},
//   {name:'Julia',age:30,gender:'F',DOB:'1/3/1991',contact:'0700000000',HIV:'Positive'},
//   {name:'Julia',age:30,gender:'F',DOB:'1/3/1991',contact:'0700000000',HIV:'Positive'}
//   ]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intern-angular';
  // //defining columns
  // displayedColumns: string [] = ['name','age','gender','DOB','contact','HIV'];

  // //initializing
  // dataSource= ELEMENT_DATA;

  headers = ['Name', 'Age', 'Gender', 'DOB', 'Contact Details', 'HIV Status'];

  rows = [
    {
      name: 'Julia',
      age: 30,
      gender: 'F',
      DOB: '1/3/1991',
      contact: '0700000000',
      HIV: 'Positive',
    },
    {
      name: 'Julia',
      age: 30,
      gender: 'F',
      DOB: '1/3/1991',
      contact: '0700000000',
      HIV: 'Positive',
    }
  ];
}
