import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isForgoutPassword = false;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private sessionService: SessionService,
    private router: Router
    ) { }

  ngOnInit() {
    this.laodLogin();
  }

  private laodLogin() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [],
    });
  }

  hasErros(formName: string) {
    const control = this.loginForm.controls[formName];

    return control.errors && (control.dirty || control.touched);
  }

  doLogin() {
    const user = this.loginForm.value;
    this.sessionService.login(user.username, user.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/cms/list']);
          this.notification.sucess('Login efetuado com sucesso.');
        }
      }, err => {
        this.notification.error('Usuário ou senha inválidos.');
      });

  }

  changeForm() {
    this.isForgoutPassword = !this.isForgoutPassword;
    this.laodLogin();
  }

  changePassword(email) {
    this.sessionService.changePassword(email)
      .subscribe(res => {
        this.notification.sucess('Senha alterada com sucesso. Confira a nova senha em seu e-mail');
        this.changeForm();
      }, err => {
        let message = 'Falha ao trocar de senha.';

        if (err.message) {
          message = `${message} ERROR: ${err.message}`;
        }

        this.notification.error(message);
      });
  }

}
