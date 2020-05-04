import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabless',
  templateUrl: './observabless.component.html',
  styleUrls: ['./observabless.component.css']
})
export class ObservablessComponent implements OnInit {
  mensajeAyudante: string;
  conTrafico = false;
  mensajeInf: string;

  constructor() {
    this.mensajeInf = '';
  }

  ngOnInit(): void {
  }
  novioEsperando() {
    this.esperarNovia().subscribe((alertadeNovia) => {
      this.mensajeAyudante = alertadeNovia;
    })
  }

  private esperarNovia() {
    return new Observable<string>((observador) => {
      setTimeout(() => {
        observador.next('La novia llego!');
        this.mensajeInf = (this.conTrafico) ? `Llego con trafico luego de (${8000}), ofrecele una bebida` : `LLego sin trafico luego de (${4000}),..`;
        //console.log('Whaaaat');
      }, (this.conTrafico) ? 8000 : 4000);
      observador.complete();
      observador.unsubscribe();
    });
  }

  // completar(){
  //   this.esperarNovia().unsubscribe();
  // }
}
