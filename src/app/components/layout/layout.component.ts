import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public heroesSubs: any = [];
  public heroesPromise: Promise<any>;
  public heroes$: Observable<any>;
  public heroesMap$: Observable<any>;
  public heroesSubscription: Subscription;

  constructor(private rxjsService: RxjsService) {
    this.heroesPromise = this.rxjsService.getHeroesPromise();
    this.heroes$ = this.rxjsService.getHeroesObservable();
    
    // Usando subscription
    this.heroesSubscription = this.rxjsService.getHeroesObservable().subscribe((data) => {
      this.heroesSubs = data.filter((heroe: any) => heroe.id <= 5);
    });

    // Usando map
    this.heroesMap$ = this.rxjsService.getHeroesObservable().pipe(
      map((heroes: any[]) => heroes.filter((heroe) => heroe.franchise === 'Marvel')));
  }
  
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
  }
}
