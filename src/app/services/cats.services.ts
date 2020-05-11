import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cat} from '../models/cat';

@Injectable({
    providedIn: 'root'
})
export class CatService {
    private ApiUrl: string;
    constructor(private http$: HttpClient) {
        this.ApiUrl = 'http://localhost:3600';
    }

    getCatById(catId: number): Observable<Cat>{
        return this.http$.get<Cat>(`${this.ApiUrl}/Cat/getById/${catId}`);
    }

    getAllCats(): Observable<Array<Cat>> {
        return this.http$.get<Array<Cat>>(`${this.ApiUrl}/Cat/getAll`);
    }

    saveCat(catItem: Cat): Observable<Cat>{
        return this.http$.post<Cat>(`${this.ApiUrl}/Cat`, JSON.stringify(catItem),{
         headers : new HttpHeaders().append('content-Type','application/json')

        });
    }
    deleteCat(catid:number):Observable<void>{
        return this.http$.delete<void>(`${this.ApiUrl}/Cat/DeleteById/${catid}`);
    }
}



