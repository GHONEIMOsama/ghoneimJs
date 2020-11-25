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

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      cardTitle: [, Validators.required],
      cardImage: [, Validators.required],
      cardDescription: []
    });
   }

  ngOnInit(): void {
    
  }

  submit(): void {
    WelcomePageComponent.initialCards.push({
      id: this.generateId(),
      title: this.form.controls.cardTitle.value,
      imageUrl: this.form.controls.cardImage.value,
      description: this.form.controls.cardDescription.value
    });
    this.router.navigate(['']);
  }

  private generateId(): number {
    const ids: number[] = WelcomePageComponent.initialCards.map((card: Card) => card.id);
    return Math.max(...ids) + 1;
  }

}
