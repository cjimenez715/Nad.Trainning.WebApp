import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({

providedIn: 'root'
})        
export class PersonService {
  baseUrl = "http://localhost:65048/Person"

  constructor(private snackBar:MatSnackBar,
     private http:HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
        duration: 3000,
        horizontalPosition:"right",
        verticalPosition:"top"
    })
  }

  create(person: Person): Observable<Person>{
    return this.http.post<Person>(this.baseUrl, person)
  }

  getAll(): Observable<Array<Person>>{
    return this.http.get<Array<Person>>(this.baseUrl+'/getAll')
    
  }
}