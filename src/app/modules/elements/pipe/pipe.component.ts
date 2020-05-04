import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 public Texto : string
 public currentdate : Date; 
 public amount: number;
  constructor() { 
    this.Texto='pipe example..... ';
    this.currentdate= new Date();
    this.amount = 54213;
  
  }

  ngOnInit(): void {
  }

}

