import { PersonService } from 'src/app/services/person.services';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  public person: Person;
  public isDelete: boolean;
  public personId: string;
  public lblTitle: string;
  public msgAction: string;
  myControl = new FormControl();
  options: Array<Person>
  filteredOptions: Observable<Array<Person>>;
  constructor(private personService: PersonService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.person = new Person();
    this.person.Id = 0;
    this.person.Name ='';
    this.person.LastName = '';
     
    const actionTypeEnum = this.route.snapshot.paramMap.get('actionType');
    this.personId = this.route.snapshot.paramMap.get('id');
    
    if(actionTypeEnum === '2')
        this.isDelete =  true;
    else
        this.isDelete = false;
    
    switch (actionTypeEnum) {
        case '0':
          this.isDelete = false;
          this.lblTitle = 'Create';
          this.msgAction = 'Created';
          break;
        case '1':
          this.isDelete = false;
          this.lblTitle = 'Update';
          this.msgAction = 'Updated';
          break;
        case '2':
          this.isDelete =  true;
          this.lblTitle = 'Delete';
          this.msgAction = 'Deleted';
          this.myControl.disable();
          break;
        default:
            break;
    }    

    if(this.personId != '0'){
      this.personService.getById(this.personId).subscribe(p=>{
        this.person = p;
        this.personService.getByfilterExceptId(" ",this.personId).subscribe(p=>{
          this.options = p;
  
          this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
          );
          this.myControl.setValue(this.person.Parent)
        });
      });
    }
    else{
      this.personService.getByfilterExceptId(" ",this.personId).subscribe(p=>{
        this.options = p;

        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.options.slice())
        );
      });
    }

  }

  displayFn(person: Person): string {
    return person && person.Name && person.LastName ? person.Name + ' - ' + person.LastName : '';
  }

  private _filter(name: string): Person[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.Name.toLowerCase().indexOf(filterValue) === 0);
  }

  selected(parentSelected) {
    this.person.Parent = parentSelected;
  }

  execute():void{
    if(this.isDelete){
      this.personService.delete(this.personId).subscribe(p=>{
        this.personService.showMessage("Person " + this.msgAction);
          this.router.navigate(['app-person-crud']);
      });
    }
    else{
      this.personService.save(this.person).subscribe(p=>{
          this.personService.showMessage("Person " + this.msgAction);
          this.router.navigate(['app-person-crud']);
        });
    }
  }

  cancel():void{
    this.router.navigate(['app-person-crud']);
  }
}