import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { mergeMap, flatMap, map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.services';
@Component({
  selector: 'app-http-clientsample',
  templateUrl: './http-clientsample.component.html',
  styleUrls: ['./http-clientsample.component.css']
})
export class HttpClientsampleComponent implements OnInit {

  personItem: Person;
  listPerson: Array<Person>;
  constructor(private person$: PersonService) {

    this.personItem = new Person();
    this.listPerson = [];
  }
  ngOnInit(): void {

    this.person$.getAllPersons().subscribe(d => {
      this.listPerson = d;
      console.log(d[0]);
    });


  }
  

  deletePersonByID(id: number): void {
    this.person$.deletePerson(id).pipe(
      tap(() => alert('Person deleted.')),
      flatMap(() => {
        return this.person$.getAllPersons();
      })
    ).subscribe(dd=>{
      this.listPerson = dd;
    });
  }

}









