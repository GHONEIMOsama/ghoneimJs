import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card, WelcomePageComponent } from '../welcome-page/welcome-page.component';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.css']
})
export class CatFormComponent implements OnInit {

  form: FormGroup;
  cardId: number;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      cardTitle: [, Validators.required],
      cardImage: [, Validators.required],
      cardDescription: []
    });
    this.cardId = -1;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.cardId != null) {
        this.cardId = params.cardId;
        const card = this.getCardWithId(params.cardId);
        this.form.controls.cardTitle.setValue(card?.title);
        this.form.controls.cardImage.setValue(card?.imageUrl);
        this.form.controls.cardDescription.setValue(card?.description);
      }
    });
  }

  submit(): void {
    if (this.cardId == -1) {
      this.addCard()
    } else {
      this.updateCard();
    }
    this.router.navigate(['']);
  }

  private addCard(): void {
    WelcomePageComponent.initialCards.push({
      id: this.generateId(),
      title: this.form.controls.cardTitle.value,
      imageUrl: this.form.controls.cardImage.value,
      description: this.form.controls.cardDescription.value
    });
  }

  private updateCard(): void {
    const index = WelcomePageComponent.initialCards.findIndex((card: Card) => card.id == this.cardId);
    WelcomePageComponent.initialCards[index].title = this.form.controls.cardTitle.value;
    WelcomePageComponent.initialCards[index].imageUrl = this.form.controls.cardImage.value;
    WelcomePageComponent.initialCards[index].description = this.form.controls.cardDescription.value;
  }

  private generateId(): number {
    const ids: number[] = WelcomePageComponent.initialCards.map((card: Card) => card.id);
    return Math.max(...ids) + 1;
  }

  private getCardWithId(cardId: number): Card | undefined {
    return  WelcomePageComponent.initialCards.find((card: Card) => card.id == cardId);
  }

}
