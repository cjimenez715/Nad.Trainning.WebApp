import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cats.services';
import { Cat } from 'src/app/models/cat';
import { mergeMap, flatMap, map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-clientsample',
  templateUrl: './http-clientsample.component.html',
  styleUrls: ['./http-clientsample.component.css']
})
export class HttpClientsampleComponent implements OnInit {

  catItem: Cat;
  listCat: Array<Cat>;
  constructor(private cat$: CatService) {

    this.catItem = new Cat();
    this.listCat = [];
  }
  ngOnInit(): void {

    this.cat$.getAllCats().subscribe(d => {
      this.listCat = d;
      console.log(d[0]);
    });


  }
  saveCurrentCat(): void {
    let subs = this.cat$.saveCat(this.catItem).pipe(
      tap(cat => {
        alert(cat.Code + ' - ' + cat.Name + ' ha sido salvado.');
      }),
      flatMap(d => {
        return this.cat$.getAllCats().pipe(
          map(dd => {
            this.listCat = dd;
            return d;
          })
        )
      })
    ).subscribe(
      cat => {
        this.catItem = cat;
        subs.unsubscribe();
      },
      e => {
        alert(JSON.stringify(e))
      }
    );
    
  }

  deleteCatByID(id: number): void {
    this.cat$.deleteCat(id).pipe(
      tap(() => alert('Cat deleted.')),
      flatMap(() => {
        return this.cat$.getAllCats();
      })
    ).subscribe(cats=>{
      this.listCat = cats;
    });
  }
  editCatByID(id: number):void{
     
  }
}









