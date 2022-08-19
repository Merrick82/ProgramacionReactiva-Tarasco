import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  public heroes: any[] = [
    { id: 1, name: 'Bruce', lastname: 'Banner', nickname: 'Hulk', franchise: 'Marvel' },
    { id: 2, name: 'Clark', lastname: 'Kent', nickname: 'Superman', franchise: 'DC' },
    { id: 3, name: 'Natasha', lastname: 'Romanoff', nickname: 'Black Widow', franchise: 'Marvel' },
    { id: 4, name: 'Barry', lastname: 'Allen', nickname: 'Flash', franchise: 'DC' },
    { id: 5, name: 'Peter', lastname: 'Parker', nickname: 'Spider-Man', franchise: 'Marvel' },
    { id: 6, name: 'Kara', lastname: 'Danvers', nickname: 'Supergirl', franchise: 'DC' },
    { id: 7, name: 'Steve', lastname: 'Rogers', nickname: 'Captain America', franchise: 'Marvel' },
    { id: 8, name: 'Diana', lastname: 'Prince', nickname: 'Wonder Woman', franchise: 'DC' },
    { id: 9, name: 'Bruce', lastname: 'Wayne', nickname: 'Batman', franchise: 'DC' },
    { id: 10, name: 'Tony', lastname: 'Stark', nickname: 'Ironman', franchise: 'Marvel' },
  ];

  constructor() { }

  public getHeroesPromise() {
    return new Promise((resolve, reject) => {
      if (this.heroes.length > 0) {
        resolve(this.heroes);
      } else {
        reject({
          codigo: 99,
          message: 'No hay heroes disponibles!'
        });
      }
    });
  }

  public getHeroesObservable() {
    return new Observable<any>((data) => {
      data.next(this.heroes);
    });
  }
}
