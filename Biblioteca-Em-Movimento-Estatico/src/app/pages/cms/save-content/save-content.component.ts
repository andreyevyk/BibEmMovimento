import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ApiService } from 'src/app/services/api.service';
import { FormContentComponent } from 'src/app/components/form-content/form-content.component';
import { ActivatedRoute } from '@angular/router';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { PageEnum } from 'src/app/interfaces/PageEnum';

@Component({
  selector: 'app-save-content',
  templateUrl: './save-content.component.html',
  styleUrls: ['./save-content.component.css']
})
export class SaveContentComponent implements OnInit {

  saveForm: FormGroup;
  idEdition: string;

  @ViewChild(FormContentComponent)
  formContent: FormContentComponent;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fillForm();
  }

  fillForm() {
    this.idEdition = this.route.snapshot.paramMap.get('id');

    if (this.idEdition) {
      this.api.getById(this.idEdition).subscribe(res => {
        this.loadForm(res);
      }, err => {
        this.loadForm();
      });
    } else {
      this.loadForm();
    }

  }

  getContentIfHas(content: any, field: string) {
    const value = content[field];

    return value || PageEnum[value] || '';
  }

  loadForm(pageContent = {} as PageContent) {
    this.saveForm = this.fb.group({
      title: [
        this.getContentIfHas(pageContent, 'title'), Validators.required
      ],
      page: [
        this.getContentIfHas(pageContent, 'page'), Validators.required
      ],
      content: [
        this.getContentIfHas(pageContent, 'content')
      ],
      add_Info: [
        this.getContentIfHas(pageContent, 'add_Info')
      ],
      imgCover_Src: [
        this.getContentIfHas(pageContent, 'imgCover_Src')
      ],
    });
  }

  save() {
    if (this.saveForm.valid) {
      const observable = (this.idEdition) ?
        this.api.PUT(this.idEdition, this.assignEditionValue()) :
        this.api.POST(this.saveForm.value);

      observable.subscribe(res => {
        if (res) {
          this.notificationService.sucess('Salvo com sucesso.');
          this.loadForm();
          this.formContent.back();
        }
      }, err => {
        this.notificationService.error(`ERRO: ${err.message}.`);
      });
    } else {
      this.listInvalidFields();
    }
  }

  assignEditionValue() {
    return Object.assign({id: this.idEdition}, this.saveForm.value);
  }

  listInvalidFields() {
    const keys = Object.keys(this.saveForm.controls);

    keys.forEach(key => {
      if (this.saveForm.controls[key].invalid) {
        this.notificationService.error(`Campo inválido: ${key}`);
      }
    });
  }

  getPageName() {
    if (this.saveForm) {
      const pageName = this.saveForm.controls['page'].value;

      if (typeof pageName === 'number') {
        return PageEnum[pageName];
      }
      return pageName ;
    }
  }

}
