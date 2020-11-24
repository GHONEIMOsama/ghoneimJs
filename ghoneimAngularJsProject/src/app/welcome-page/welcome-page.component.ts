import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  static initialCards: Card[] = [
    {
      id: 1,
      title: 'Random cat card',
      imageUrl: 'https://cataas.com/cat?width=250&height=200',
      description: 'That card shows a random cat image.'
    },
    {
      id: 2,
      title: 'Random cat card',
      imageUrl: 'https://cataas.com/cat/says/Hello?width=250&height=200',
      description: 'That card shows a random cat image with a text !'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get getInitialCards(): Card[] {
    return WelcomePageComponent.initialCards;
  }

}

export interface Card {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}
