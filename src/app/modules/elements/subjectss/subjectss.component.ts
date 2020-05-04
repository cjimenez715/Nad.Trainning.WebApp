import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjectss',
  templateUrl: './subjectss.component.html',
  styleUrls: ['./subjectss.component.css']
})
export class SubjectssComponent implements OnInit {

  constructor() { 
    this.numeroSubject.subscribe(numero => this.numero = numero)
  }

  ngOnInit(): void {
  }
  public numeroSubject: Subject<number>= new Subject();

  numero: number;
  siguiente() : void{
     const valor = Math.floor((Math.random() * 100) +1)
     this.numeroSubject.next(valor);
     console.log(valor);
  }
  completar() : void{
    this.numeroSubject.complete();
   // this.numeroSubject.unsubscribe();
  }  

}
