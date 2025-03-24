import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss'
})
export class UserRegisterComponent implements OnInit{

  private formBuilder = inject(FormBuilder);
  private userService = inject(UserService);

  protected userRegisterForm!: FormGroup;

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
        description: ["", [Validators.required, Validators.max(1024)]]
      }
    )
  }

  sendForm(){
    if (this.userRegisterForm.valid) {
      const user: User = {...this.userRegisterForm.value};
      this.userService.addUser(user);
    }
  }
}
