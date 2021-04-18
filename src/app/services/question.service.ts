import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IQuestion } from '../model/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseUrl = 'http://localhost:8000/questions';
  constructor(private http: HttpClient) {}

  getAll(): Observable<IQuestion[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
