import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Injectable({
  providedIn: 'root'
})
//L service est indépendant & est intéroggé que quand il y a besoin 

export class HeroService {
  //Fonction get
  //[] Doubles crochets pour avoir la liste de ma class Hero 
  getHeroes(): Hero[]{
    //Je recupère les Heroes
    return HEROES
  }

  constructor() { }
}
