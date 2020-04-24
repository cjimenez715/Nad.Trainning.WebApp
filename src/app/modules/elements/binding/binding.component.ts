import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public bind :string; 
  public binde : string ;
  public person: Array<string>;
  constructor() {
       this.bind = 'a';
       this.binde = 'fff';
       this.person = ['Nombre1','Nombre2','Nombre3' ];


   }

  ngOnInit(): void {
  }

  public bindingMetodh(param:string)
  {
    this.person.push('nombre'+param)
        }
}
