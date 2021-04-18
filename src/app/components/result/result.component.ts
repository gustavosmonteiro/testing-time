import { Component, OnInit } from '@angular/core';

import { ResponseService } from 'src/app/services/response.service';
import { IResponse } from 'src/app/model/response';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  count = 0;
  constructor(private responseService: ResponseService) {}

  ngOnInit(): void {
    let lastId: string;
    this.responseService.getAll().subscribe((responses) => {
      responses
        .filter(
          (response) => this.ownAnIphone(response) || this.travelByCar(response)
        )
        .map((filteredResponse) => filteredResponse.userId)
        .sort()
        .forEach((id) => (id === lastId ? this.count++ : (lastId = id)));
    });
  }

  ownAnIphone(response: IResponse) {
    return response.questionId === '1' && response.answeredIndex === 2;
  }

  travelByCar(response: IResponse) {
    return response.questionId === '2' && response.answeredIndex === 1;
  }
}
