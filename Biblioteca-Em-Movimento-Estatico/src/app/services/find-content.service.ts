import { Injectable } from '@angular/core';
import { CONTENT } from './Data';
import { PageContent } from '../interfaces/project-card-content';
import { PageEnum } from '../interfaces/PageEnum';

@Injectable({
  providedIn: 'root'
})
export class FindContentService {

  constructor() { }

  getContent(pageName: PageEnum, where?): PageContent[] {
    if (where) {
      return CONTENT.filter(_content => _content.page === pageName &&
        _content[where.searchBy].search(new RegExp(where.search, 'i')) >= 0);
    }
    return CONTENT.filter(_content => _content.page === pageName);
  }

}
