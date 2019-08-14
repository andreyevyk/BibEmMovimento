import { Component, OnInit, Input, Output } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { EventEmitter } from '@angular/core';
import { PageEnum } from 'src/app/interfaces/PageEnum';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  @Input()
  content: PageContent[];

  @Output()
  page = new EventEmitter();
  @Output()
  edit = new EventEmitter();
  @Output()
  delete = new EventEmitter();

  pageName: PageEnum = PageEnum.project;

  constructor() { }

  ngOnInit() {
  }

  setPage(page: PageEnum = PageEnum.project) {
    this.pageName = page;
    this.page.emit(page);
  }

}
