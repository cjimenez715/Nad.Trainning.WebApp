import { Observable } from 'rxjs';
import { Person } from './person.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl = "http://localhost:65048/api/person"

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

}
