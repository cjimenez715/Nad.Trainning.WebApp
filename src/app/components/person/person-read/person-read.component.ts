// import { PersonService } from './../person.service';
// import { Person } from './../person.model';
import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.services';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})
export class PersonReadComponent implements OnInit {

  personList: Array<Person>
  displayedColumns = ['id', 'name','lastName','age', 'action'];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe(p=>{
      this.personList = p;
      console.log(this.personList);
    });
  }

}
