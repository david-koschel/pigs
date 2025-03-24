import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from '../../services/user.service';
import {finalize} from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private readonly userService = inject(UserService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  protected loginForm!: FormGroup;
  private loading: boolean = false;
  protected showError: boolean = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        password: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]]
      }
    )
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid && !this.loading) {
      this.loading = true;
      this.userService.login(this.loginForm.value)
        .pipe(finalize(() => this.loading = false))
        .subscribe({
          next: res => this.authService.login(res),
          error: () => this.showError = true
        }
      );
    }
  }
}
