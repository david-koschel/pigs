import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {EventService} from '../../services/event.service';
import {AuthService} from '../../services/auth.service';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-event-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TitleCasePipe
  ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit{

  private formBuilder = inject(FormBuilder);
  private eventService = inject(EventService);
  private authService = inject(AuthService);

  form!: FormGroup;

  protected readonly privacyOptions = [
    {value: "PRIVATE", label: "Private"},
    {value: "PUBLIC_EVERYONE", label: "Public"},
    {value: "PUBLIC_INVITATION", label: "Public with invitation"}
  ]


  protected readonly cookingCategories = [
    { value: "VEGETARIAN", label: "Vegetarian" },
    { value: "VEGAN", label: "Vegan" },
    { value: "MEAT", label: "Meat" },
    { value: "DESSERT", label: "Dessert" },
    { value: "FISH", label: "Fish" },
    { value: "ASIAN", label: "Asian" },
    { value: "MEDITERRANEAN", label: "Mediterranean" },
    { value: "MEXICAN", label: "Mexican" },
    { value: "ITALIAN", label: "Italian" },
    { value: "AMERICAN", label: "American" },
    { value: "CHINESE", label: "Chinese" },
    { value: "JAPANESE", label: "Japanese" },
    { value: "KOREAN", label: "Korean" },
    { value: "MIDDLE_EASTERN", label: "Middle Eastern" },
    { value: "INDIAN", label: "Indian" },
    { value: "THAI", label: "Thai" },
    { value: "OTHER", label: "Other" }
  ]

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        description: ["", [Validators.required, Validators.maxLength(1024)]],
        dateTime: ["", [Validators.required]],
        location: ["", [Validators.required]],
        cookingCategories: ["", [Validators.required]],
        maxAttendees: ["", [Validators.required]],
        privacy: ["", [Validators.required]]
      }
    )
  }

  sendForm(){
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const event: Event = this.form.value;
      const userLogged = this.authService.user
      if (userLogged?.id){
        this.eventService.createEvent(event, userLogged.id).subscribe(
          next=>{
            this.form.reset();
          },
          error => {
            console.error("Error:", error);
          }
        );
      }
    } else {
      console.log(this.form.errors)
    }
  }
}
