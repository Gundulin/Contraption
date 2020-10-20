import { Component, OnInit } from '@angular/core';

export interface GameToken {
  id: string;
  quantity: number;
}

@Component({
  selector: 'app-mystic-vale-companion',
  templateUrl: './mystic-vale-companion.component.html',
  styleUrls: ['./mystic-vale-companion.component.scss']
})
export class MysticValeCompanionComponent implements OnInit {

  corruption = {
    id: 'corruption',
    quantity: 0
  };
  
  mana = {
    id: 'mana',
    quantity: 0
  };;
  animalSpirit = {
    id: 'animalSpirit',
    quantity: 0
  };
  forestSpirit= {
    id: 'forestSpirit',
    quantity: 0
  };
  skySpirit= {
    id: 'skySpirit',
    quantity: 0
  };
  wildSpirit= {
    id: 'wildSpirit',
    quantity: 0
  };
  victoryPoint= {
    id: 'victoryPoint',
    quantity: 0
  };

  constructor() {}

  ngOnInit(): void {

  }

  decreaseValue(token: GameToken): void {
    if (token.quantity < 1) {
      if (token.id === 'corruption') {
        token.quantity--;
        return;
      }
      else {
        return;
      }
    }
    token.quantity--;
  }

  increaseValue(GameToken: GameToken): void {
    GameToken.quantity++;
  }

  resetGameTokenQuantities(): void {
    this.corruption.quantity = 0;
    this.mana.quantity = 0;
    this.animalSpirit.quantity = 0;
    this.forestSpirit.quantity = 0;
    this.skySpirit.quantity = 0;
    this.wildSpirit.quantity = 0;
    this.victoryPoint.quantity = 0;
  }

}
