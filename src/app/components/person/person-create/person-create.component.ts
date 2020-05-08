import { Person } from './../person.model';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  person: Person = {
    Name: 'From Angular',
    LastName : 'Test',
    Age: 10
  }

  constructor(private personService: PersonService,
    private router: Router){


  }

  ngOnInit(): void {
    
  }

  createPerson():void{
    this.personService.create(this.person).subscribe(p=>{
        this.personService.showMessage(p.Name + " Person Created!");
        this.router.navigate(['app-person-crud']);
      });
  }

  cancel():void{
    this.router.navigate(['app-person-crud']);
  }
}
