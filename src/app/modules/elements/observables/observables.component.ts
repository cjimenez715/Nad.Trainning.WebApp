import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  messageHelper: string;
  withTraffic = false;
  messageInfo: string;

  constructor() {
    this.messageInfo = '';
  }

  ngOnInit(): void {
  }
  boyfriendWaiting() {
    this.waitingForGirldfriend().subscribe((alertGirldfriend) => {
      this.messageHelper = alertGirldfriend;
    })
  }

  private waitingForGirldfriend() {
    return new Observable<string>((observador) => {
      setTimeout(() => {
        observador.next('GirldFirend got Home!');
        this.messageInfo = (this.withTraffic) ? `He got home late with (${8000}), offer her a drink` : `He got home late with  (${4000}),..`;
        //console.log('Whaaaat');
      }, (this.withTraffic) ? 8000 : 4000);
      observador.complete();
      observador.unsubscribe();
    });
  }

  // completar(){
  //   this.esperarNovia().unsubscribe();
  // }
}
