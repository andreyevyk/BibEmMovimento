import { Injectable } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  duration = 2000;

  constructor(private notifierService: NgxNotifierService) { }

  sucess(message: string) {
    this.notifierService.createToast(message, 'success', this.duration);
  }

  error(message: string) {
    this.notifierService.createToast(message, 'danger', this.duration);
  }

  warning(message: string) {
    this.notifierService.createToast( message, 'warning', this.duration);
  }

}
