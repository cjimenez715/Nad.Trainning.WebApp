import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Person } from '../models/Person';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({

providedIn: 'root'
})        
export class PersonService {
  baseUrl = "http://localhost:65048/Person"

  constructor(private snackBar:MatSnackBar,
     private http:HttpClient) { }

  showMessage(msg: string, isError:boolean = false): void{
    this.snackBar.open(msg,'X',{
        duration: 3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass: isError? ['msg-error'] : ['msg-success']
    })
  }

  save(person: Person): Observable<Person>{
    if(person.Id ==0)
      return this.http.post<Person>(this.baseUrl, person)
    else
      return this.http.put<Person>(this.baseUrl, person);
  }

  getById(personId: string):Observable<Person>{
    const url = `${this.baseUrl}/getById/${personId}`
    return this.http.get<Person>(url)
  }

  getAll(): Observable<Array<Person>>{
    return this.http.get<Array<Person>>(this.baseUrl+'/getAll');
  }

  delete(personId: string):Observable<void>{
     const url = `${this.baseUrl}/deleteById/${personId}`
     return this.http.delete<void>(url);
  }

  errorHandler (e: any): Observable<any>{
    return EMPTY;
  }
}