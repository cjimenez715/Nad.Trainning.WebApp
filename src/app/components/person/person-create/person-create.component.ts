
// import { Person } from './../person.model';
// import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.services';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  public person: Person;

  constructor(private personService: PersonService,
    private router: Router){

     this.person = new Person();
  }

  ngOnInit(): void {
    
  }

  createPerson():void{
    this.personService.create(this.person).subscribe(p=>{
        this.personService.showMessage(p.Name + " Created!");
        this.router.navigate(['app-person-crud']);
      });
  }

  cancel():void{
    this.router.navigate(['app-person-crud']);
  }
}
