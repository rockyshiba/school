import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guestSearch: Person = new Person();

  guests: Person[];

  constructor(private peopleService: PeopleService) { }

  searchPerson(person: Person): void {
    this.peopleService.getPeople(person).subscribe(results => this.guests = results);
    console.log(this.guests);
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => this.guests = data);
  }

}
