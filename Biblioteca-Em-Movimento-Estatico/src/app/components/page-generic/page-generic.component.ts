import { Component, OnInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';

@Component({
  selector: 'app-page-generic',
  templateUrl: './page-generic.component.html',
  styleUrls: ['./page-generic.component.css']
})
export class PageGenericComponent implements OnInit {

  defaultImg = '../../../assets/images/slide/BMmarca.jpg';
  pageContent: PageContent[];
  limitContent = 4;
  page = 1;
  contentLength: number;
  pageEnum: string;

  constructor(
    protected apiService: ApiService,
    protected notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent(skip = 1) {
    skip--;
    skip *= this.limitContent;

    forkJoin([
      this.apiService.getByPage(this.pageEnum, this.limitContent, skip),
      this.apiService.count(this.pageEnum)
    ]).subscribe(([res, count]) => {
      this.pageContent = res;
      this.contentLength = count;

      this.setDefaultImg();
    }, err => {
      this.notificationService.error(`ERRO: ${err.message}.`);
    });
  }

  setDefaultImg() {
    if (this.pageEnum === PageEnum[0]) {
      this.pageContent.map(card => {
        if (!card.imgCover_Src) {
          card.imgCover_Src = this.defaultImg;
        }
      });
    }
  }
}
