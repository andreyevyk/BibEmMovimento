import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private api: ApiService,
    ) { }

  ngOnInit() {
    this.loadFormGroup();
  }

  private loadFormGroup() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  send() {
    if (this.contactForm.valid) {
      this.api.sendMail(this.contactForm.value)
        .subscribe(res => {
          if (res) {
            this.notificationService.sucess('Enviado com sucesso.');
            this.loadFormGroup();
          }
        }, err => {
          this.notificationService.error(`ERRO: ${err.message}.`);
        });
    } else {
      this.notificationService.error(`Formulário inválido, favor corrigir os campos.`);
    }
  }

  hasErros(formName: string) {
    const control = this.contactForm.controls[formName];

    if (control.errors && (control.dirty || control.touched)) {
      return true;
    }
    return false;
  }
}
