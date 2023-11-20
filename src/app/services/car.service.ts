import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Car } from '../models/car.model';


@Injectable({
    providedIn: 'root',
  })
  export class CarService {
    private backUrl = 'http://localhost:8080/car';
  
    constructor(private httpClient: HttpClient) {}
  
    createCar(car: Car): Observable<Car> {
        console.log(`Data send ${JSON.stringify(car)}`);
        const urlCreate = `${this.backUrl}/create`;
        return this.httpClient.post<Car>(urlCreate,car).pipe(
            catchError((error:any) => {
            console.error('Error :', error);
            throw error;
        })
        );
    }

  }

