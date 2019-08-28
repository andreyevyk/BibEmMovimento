import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { forkJoin } from 'rxjs';
import { PageGenericComponent } from 'src/app/components/page-generic/page-generic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PageGenericComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    private _notificationService: NotificationService
  ) {
    super(_apiService, _notificationService);
   }

  ngOnInit() {
    this.pageEnum = PageEnum[0];
    super.ngOnInit();
  }

  orderCards(index: number): boolean {
    return (index % 2) === 0;
  }
}
