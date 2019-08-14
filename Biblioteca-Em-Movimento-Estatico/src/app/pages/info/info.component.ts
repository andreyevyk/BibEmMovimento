import { Component, OnInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  infoContent: PageContent[];

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService,
    public findContentService: FindContentService
  ) { }

  ngOnInit() {
    this.apiService.getByPage(PageEnum[3]).subscribe(res => {
      this.infoContent = res;
    }, err => {
      this.notificationService.error(`ERRO: ${err.message}.`);
    });
  }

}
