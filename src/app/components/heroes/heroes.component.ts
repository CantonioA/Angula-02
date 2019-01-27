import { Component, OnInit } from '@angular/core';

import { HeroesService, HeroesInterface } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: HeroesInterface[] = [];

  constructor(private _heroesService: HeroesService,
    private router: Router) {

    }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }
  verHeroe( idx: number) {
this.router.navigate(['/heroe', idx]);
  }

}
