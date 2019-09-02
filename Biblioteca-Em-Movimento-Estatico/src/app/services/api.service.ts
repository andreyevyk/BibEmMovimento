import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { GenericCrudService } from './generic-crud.service';
import { FilteringParams } from '../interfaces/filtering-params';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends GenericCrudService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {
    return this.GET();
  }

  get(where: FilteringParams) {
    return this.GET(null, where);
  }

  getByPage(page: string, limit: number = 0, skip: number = 0) {
    const where: FilteringParams = {
      filterBy: 'page',
      search: page,
      limit: limit,
      skip: skip
    };

    return this.GET(null, where);
  }

  getPhotoByAlbum(idAlbum) {
    const params = new HttpParams().set('idAlbum', idAlbum);

    return this.http.get<Photo[]>('/api/Photos', {params});
  }

  count(page: string) {
    const where: FilteringParams = {
      filterBy: 'page',
      search: page,
    };

    return this.GET(null, where, true);
  }

  getById(id: string) {
    return this.GET(id);
  }

  sendMail(content: any) {
    return this.genericRequest('POST', 'http://167.99.62.84:4000/api/Pages/contact', content);
  }

  login(content: any) {
    return this.genericRequest('POST', 'http://167.99.62.84:4000/api/User', content);
  }

  changePassword(email: string) {
    const params = new HttpParams().set('email', email);

    return this.http.put<any>('http://167.99.62.84:4000/api/User', null, {params});
  }

}
