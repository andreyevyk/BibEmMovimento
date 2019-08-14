import { Component, OnInit } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';
import { forkJoin } from 'rxjs';
import { PageGenericComponent } from 'src/app/components/page-generic/page-generic.component';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent extends PageGenericComponent implements OnInit {

  photosAlbum: NgxGalleryImage[];
  galleryCards: any;
  
  galleryOptions = [
    {
      'image': false,
      'thumbnailsRemainingCount': true,
      'width': '100%',
      'height': '200px'
    },
    {
      'breakpoint': 500,
      'width': '100%',
      'thumbnailsColumns': 2
    }
  ] as NgxGalleryOptions;

  constructor(
    private _apiService: ApiService,
    private _notificationService: NotificationService,
  ) {
    super(_apiService, _notificationService);
   }

  ngOnInit() {
    this.pageEnum = PageEnum[1];
    super.ngOnInit();
  }

  getPhotos(albumId) {
    this.apiService.getPhotoByAlbum(albumId)
      .subscribe(res => {
        this.photosAlbum = res.map(photo => new NgxGalleryImage({
          url: photo.img, medium: photo.img,
          small: photo.img, big: photo.img,
          label: photo.title,
        }));
      });
  }

  clearPhotos() {
    this.photosAlbum = null;
    super.ngOnInit();
  }

}
