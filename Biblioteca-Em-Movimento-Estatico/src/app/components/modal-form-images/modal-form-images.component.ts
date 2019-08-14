import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Photo } from 'src/app/interfaces/photo';

@Component({
  selector: 'modal-form-images',
  templateUrl: './modal-form-images.component.html',
  styleUrls: ['./modal-form-images.component.css']
})
export class ModalFormImagesComponent implements OnInit {

  @ViewChild('basicModal')
  basicModal: MDBModalRef;

  photosAlbum: Photo[];

  @Input()
  idEdition: string;

  @Input()
  pageContentId: string;
  cadImages: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refrashForm();
    this.getPhotos(this.idEdition);
  }

  public refrashForm() {
    this.cadImages = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
      img: ['', [Validators.required]],
      pageContentId: [this.idEdition, [Validators.required]]
    });
  }

  save() {
    this.api.setBaseUrl('api/Photos');

    if (this.cadImages.valid) {
      let observable;

      if (this.cadImages.value.id) {
        observable = this.api.PUT(this.cadImages.value.id, this.cadImages.value);
      } else {
        const value = this.cadImages.value;
        delete value.id;

        observable = this.api.POST(value);
      }

      observable.subscribe(res => {
        if (res) {
          this.notificationService.sucess('Salvo com sucesso.');

          this.basicModal.hide();

          this.getPhotos(this.idEdition);
        }
      }, err => {
        this.notificationService.error(`ERRO: ${err.message}.`);
      });
    } else {
      this.notificationService.sucess('Formulário inválido.');
    }

    this.api.setBaseUrl('api/Pages');
  }

  hasErros(formName: string) {
    const control = this.cadImages.controls[formName];

    if (control.errors && (control.dirty || control.touched)) {
      return true;
    }
    return false;
  }

  getPhotos(albumId) {
    this.api.getPhotoByAlbum(albumId)
      .subscribe(res => {
        this.photosAlbum = res;
      });
  }

  onSelect(selected) {
    this.api.setBaseUrl('api/Photos');

    this.api.getById(selected.id)
      .subscribe(res => {
        delete res.pageContent;

        this.cadImages.setValue(res);
      });

    this.api.setBaseUrl('api/Pages');
  }

  onRemoved(item) {
    this.api.setBaseUrl('api/Photos');

    this.api.DELETE(item.id)
      .subscribe(res => {
        this.photosAlbum = this.photosAlbum.filter(photo => {
          if (item.id !== photo.id) {
            return photo;
          }
        });
      });

    this.api.setBaseUrl('api/Pages');
  }

}
