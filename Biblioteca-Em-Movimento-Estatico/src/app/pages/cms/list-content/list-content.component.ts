import { Component, OnInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { PageEnum } from 'src/app/interfaces/PageEnum';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.css']
})
export class ListContentComponent implements OnInit {

  content: PageContent[];

  pageName: PageEnum = PageEnum.project;

  constructor(
    private findContentService: FindContentService,
    private notificationService: NotificationService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refrashContent();
  }

  refrashContent(pageName: PageEnum = this.pageName) {
    this.pageName = pageName;

    this.apiService.getByPage(PageEnum[pageName]).subscribe(res => {
      if (res && res.length) {
        this.content = res;
      } else {
        this.setStaticContent(pageName);
      }
    }, err => {
      this.setStaticContent(pageName);
    });
  }

  setStaticContent(pageName) {
    this.content = this.findContentService.getContent(pageName);
  }

  edit(id: string) {
    this.router.navigate([`/cms/save/${id}`]);
  }

  delete(id: string) {
    this.apiService.DELETE(id).subscribe(res => {
      this.notificationService.sucess(`Sucesso, ${res.body.title} foi removido`);
      this.refrashContent();
    }, err => {
      this.notificationService.error(`ERRO: ${err.message}.`);
    });
  }

}
