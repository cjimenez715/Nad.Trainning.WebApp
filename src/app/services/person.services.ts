import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../models/Person';

@Injectable({

providedIn: 'root'
})        
export class PersonService {
  private ApiUrl: string;
  constructor(private http$: HttpClient)
  {
    this.ApiUrl = 'http://localhost:65048'

  }

   getAllPersons():Observable<Array<Person>>
   {
        return this.http$.get<Array <Person>>(`${this.ApiUrl}/Person/getAll`);

   }
   deletePerson(personId:number):Observable<void>
    {
      return this.http$.delete<void>(`${this.ApiUrl}/Person/DeleteById/${personId}`);

    }
}