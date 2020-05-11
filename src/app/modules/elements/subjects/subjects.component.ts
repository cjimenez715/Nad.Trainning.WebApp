import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { 
    this.numberSubject.subscribe(number => this.number = number)
  }

  ngOnInit(): void {
  }
  public numberSubject: Subject<number>= new Subject();

  number: number;
  next() : void{
     const valor = Math.floor((Math.random() * 100) +1)
     this.numberSubject.next(valor);
     console.log(valor);
  }
  complete() : void{
    this.numberSubject.complete();
    this.numberSubject.unsubscribe();
  }  

}
