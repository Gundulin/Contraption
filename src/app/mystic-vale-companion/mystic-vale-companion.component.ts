import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mystic-vale-companion',
  templateUrl: './mystic-vale-companion.component.html',
  styleUrls: ['./mystic-vale-companion.component.scss']
})
export class MysticValeCompanionComponent implements OnInit {

  corruption: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  subtractCorruption(): void {
    this.corruption--;
  }

  addCorruption(): void {
    this.corruption++;
  }

}
