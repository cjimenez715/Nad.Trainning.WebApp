import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { thistle } from 'color-name';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit{ 
  @Input('appForEm') numbers: number[]  
  @Input('appForTexto') mombre: string
  constructor(
    private container : ViewContainerRef, 
    private template: TemplateRef<any>) { 
   // console.log('appFor')
  }
  ngOnInit(): void{
    console.log(this.numbers) 
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, {$implicit: number + this.mombre});
    }
  }

}

