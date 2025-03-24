import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-user-register',
  imports: [
    ReactiveFormsModule,
    TitleCasePipe
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent implements OnInit{

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);

  protected userRegisterForm!: FormGroup;

  protected readonly diets = [
    "CARNIVOROUS",
    "OMNIVOROUS",
    "VEGETARIAN",
    "VEGAN",
    "FLEXITARIAN",
    "CELIAC",
    "KETO",
    "PALEO",
    "OTHER"
  ];

  protected readonly genderPreferences = [
    "HETEROSEXUAL",
    "GAY",
    "LESBIAN",
    "BISEXUAL",
    "ASEXUAL",
    "QUESTIONING",
    "PREFER NOT TO SAY",
    "OTHER"
  ];

  protected readonly preferences = [
    {value: "FRIENDSHIP", label: "Friendship"},
    {value: "SERIOUS_RELATIONSHIP", label: "Serious Relationship"},
    {value: "COOKING_BUDDY", label: "Cooking Buddy"},
    {value: "CASUAL_DATE", label: "Casual Date"},
    {value: "UNDEFINED", label: "Anything"},
  ]

  ngOnInit() {
    this.userRegisterForm = this.formBuilder.group(
      {
        username: ["", Validators.required],
        password: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", Validators.required],
        gender: ["", Validators.required],
        genderPreference: ["", Validators.required],
        birthDate: ["", Validators.required],
        location: ["", Validators.required],
        dietType:["", Validators.required],
        preference:["", Validators.required],
        description: ["", [Validators.required, Validators.maxLength(1024)]]
      }
    )
  }

  sendForm(){
    this.userRegisterForm.markAllAsTouched();
    if (this.userRegisterForm.valid) {
      const user: User = this.userRegisterForm.value;
      console.log(user);
      this.userService.addUser(user).subscribe();
    } else {
      console.log(this.userRegisterForm.errors)
    }
  }
}
