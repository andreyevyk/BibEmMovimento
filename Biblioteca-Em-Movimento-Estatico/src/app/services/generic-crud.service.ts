import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FilteringParams } from '../interfaces/filtering-params';
import { PageContent } from '../interfaces/project-card-content';
import { filter, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService {

  private baseURL = '/api/Pages';
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With,' +
      ' Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    protected http: HttpClient
    ) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setBaseUrl(url: string) {
    this.baseURL = url;
  }

  protected GET(id?: string, where?: FilteringParams, isCount = false) {
    const url = (id) ? `${this.baseURL}/${id}` :
      (isCount) ? `${this.baseURL}/Count` : this.baseURL;

    let params = new HttpParams();

    if (!id) {
      params = params.set('filterBy', where.filterBy)
        .set('search', where.search);

      if (where.limit || where.limit === 0) {
        params = params.set('limit', where.limit.toString());
      }

      if (where.skip || where.skip === 0) {
        params = params.set('skip', where.skip.toString());
      }
    }

    return this.http.get<any>(url, {params, headers: this.httpOptions.headers});
  }

  POST(content: PageContent) {
    return this.genericRequest('POST', this.baseURL, content);
  }

  DELETE(id: string) {
    return this.genericRequest('DELETE', `${this.baseURL}/${id}`);
  }

  PUT(id: string, content: PageContent) {
    return this.genericRequest('PUT', `${this.baseURL}/${id}`, content);
  }

  genericRequest(method: string, url: string, body = {}) {
    const req = new HttpRequest(method, url, body, {headers: this.httpOptions.headers});

    return this.http.request(req).pipe(
      filter(event => event instanceof HttpResponse),
      map((response: HttpResponse<any>) => response)
    );

  }
}
