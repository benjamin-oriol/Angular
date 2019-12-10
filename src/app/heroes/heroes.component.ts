import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

//Pas obligé de mettre l'extension .ts

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //Variable nom hero
  // hero : Hero = {
  //   id:1,
  //   name: 'Tornado'
  // }
  
  //Mes heroes sont bien la liste
  
  heroes :Hero[];

  //La variable privée fait référence à mon service 
  //& grace à ça le composant est lié à mon service
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  //Je lui donne une méthode qui retourne rien (void)
  getHeroes():void{
    this.heroes = this.heroService.getHeroes()
  }

  //Methode onSelect
  // onSelect(hero: Hero):void{
  //   this.selectedHero = hero;
  // }
}
