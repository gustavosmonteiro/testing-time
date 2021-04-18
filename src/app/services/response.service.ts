import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private baseUrl = 'http://localhost:8000/responses';
  constructor(private http: HttpClient) {}

  getAll(): Observable<IResponse[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
