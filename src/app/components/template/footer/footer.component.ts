import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <mat-toolbar class="footer">
   <span>
   Copyright <strong> © 2020 NAD </strong>
   </span>
   </mat-toolbar>
  `,
    styles: [` 
  .footer{
    position: fixed;
    bottom:0;
    display:flex;
    justify-content: center;
  }
  .footer > span {
    font-size: 1rem;
    font-weight:300;
  }

  `],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
