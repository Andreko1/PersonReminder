import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  TAG_URL = environment.BASE_URL;
  /* BASE_URL = environment.BASE_URL; */
  BASE_URL = '../../../assets/jsons';
  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}/${url}`);
  }
}
