
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
//L service est indépendant & est intéroggé que quand il y a besoin 

export class HeroService {
  constructor(private messageService: MessagesService) { 

  }
  //Fonction get
  //[] Doubles crochets pour avoir la liste de ma class Hero 
  //Je vais chercher les infos en mode asynchrone avec les observables
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService : fetched heroes');
    //Je recupère les Heroes
    return of (HEROES)
  }


}
