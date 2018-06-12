import { Injectable } from '@angular/core';
import { Person } from './person';
import {Observable, of, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    {id: 1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('1950/01/01')},
    {id: 2, firstName: 'Bernie', lastName: 'Monette', dateOfBirth: new Date('1955/01/01')},
    {id: 3, firstName: 'Sean', lastName: 'Doyle', dateOfBirth: new Date('1980/01/01')}
  ];

  filteredPeople: Person[] = [];

  getPeople(person?: Person): Observable<Person[]> {

    if (person !== undefined) {

      this.filteredPeople = [];

      for (let p of this.people) {
        if ( p.firstName.toLowerCase() === person.firstName.toLowerCase() || p.lastName.toLowerCase() === person.lastName.toLowerCase() ) {
          this.filteredPeople.push(p);
        }
      }

      return of(this.filteredPeople);
    }

    return of(this.people);
  }

  constructor() { }
}
