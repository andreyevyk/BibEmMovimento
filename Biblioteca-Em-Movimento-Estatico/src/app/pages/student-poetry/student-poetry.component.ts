import { Component, OnInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { forkJoin } from 'rxjs';
import { PageGenericComponent } from 'src/app/components/page-generic/page-generic.component';

@Component({
  selector: 'app-student-poetry',
  templateUrl: './student-poetry.component.html',
  styleUrls: ['./student-poetry.component.css']
})
export class StudentPoetryComponent extends PageGenericComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    private _notificationService: NotificationService
  ) {
    super(_apiService, _notificationService);
   }

  ngOnInit() {
    this.pageEnum = PageEnum[2];
    super.ngOnInit();
  }

}
