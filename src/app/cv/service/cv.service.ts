import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  persons:Person[]=[]
  constructor() {
    this.persons=[
      new Person(1,"ABBASSI","Altaf Allah","aaa.jpg",21),
      new Person(2,"ABBASSI","Mohamed Ayoub","ayoub.jpg",23)

    ]
  }
  getPersons(){
    return this.persons;
  }
}